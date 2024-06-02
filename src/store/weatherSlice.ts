import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GeoCoordinates, GeoDecoding} from '../models/GeoDecoding';
import {RootState} from '.';

type WeatherState = {
  coordinates: {lat?: number; lon?: number};
  savedLocations: GeoDecoding[];
  currentLocation?: GeoDecoding;
};

const initialState: WeatherState = {
  coordinates: {},
  savedLocations: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCoordinates(state, action: PayloadAction<GeoCoordinates>) {
      state.coordinates = {...action.payload};
    },
    saveLocation(state, action: PayloadAction<GeoDecoding>) {
      state.savedLocations.push(action.payload);
    },
    setCurrentLocation(state, action: PayloadAction<GeoDecoding>) {
      state.currentLocation = action.payload;
    },
    removeLocation(state, action: PayloadAction<GeoDecoding>) {
      const newArray = state.savedLocations.filter(
        location => location.name !== action.payload.name,
      );
      state.savedLocations = newArray;
    },
  },
});

export const selectCoordinates = (state: RootState) =>
  state.weather.coordinates;
export const selectCurrentLocation = (state: RootState) =>
  state.weather.currentLocation;
export const selectSavedLocations = (state: RootState) =>
  state.weather.savedLocations;
export const selectIsLocationSaved = (state: RootState, name: string) =>
  state.weather.savedLocations.findIndex(location => location.name === name) !==
  -1;

export const {setCoordinates, saveLocation, removeLocation} =
  weatherSlice.actions;
export default weatherSlice.reducer;
