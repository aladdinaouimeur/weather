// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY} from '../constants/apiKey';
import {GeoDecoding} from '../models/GeoDecoding';

type GetWeatherByCoordinatesRequest = {
  lat: number;
  lon: number;
};

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/`,
  }),
  endpoints: builder => ({
    getWeatherByCoordinates: builder.query<any, GetWeatherByCoordinatesRequest>(
      {
        query: name => `weather?appid=${API_KEY}/${name}`,
      },
    ),
    getGeoLocationOfPlace: builder.query<GeoDecoding[], string>({
      query: query => `geo/1.0/direct?q=${query}&appid=${API_KEY}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetWeatherByCoordinatesQuery, useGetGeoLocationOfPlaceQuery} =
  weatherApi;
