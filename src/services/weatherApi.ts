// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY} from '../constants/apiKey';
import {GeoDecoding} from '../models/GeoDecoding';
import {WeatherData} from '../models/WeatherData';

type CoordinatesRequest = {
  lat: number;
  lon: number;
};

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/',
  }),
  endpoints: builder => ({
    getWeatherByCoordinates: builder.query<WeatherData, CoordinatesRequest>({
      query: query =>
        `data/2.5/weather?lat=${query.lat}&lon=${query.lon}&appid=${API_KEY}&units=metric`,
    }),
    getGeoLocationOfPlace: builder.query<GeoDecoding[], string>({
      query: query => `geo/1.0/direct?q=${query}&appid=${API_KEY}&limit=5`,
    }),
    getPlaceFromGeoLocation: builder.query<GeoDecoding, CoordinatesRequest>({
      query: query =>
        `geo/1.0/reverse?lat=${query.lat}&lon=${query.lon}&appid=${API_KEY}&limit=1`,
      transformResponse: (response: GeoDecoding[]) => {
        return response[0];
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetWeatherByCoordinatesQuery,
  useGetGeoLocationOfPlaceQuery,
  useGetPlaceFromGeoLocationQuery,
} = weatherApi;
