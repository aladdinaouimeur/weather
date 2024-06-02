import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GeoDecoding} from '../models/GeoDecoding';
import {RootState} from '.';

type WeatherState = {
  savedLocations: GeoDecoding[];
  selectedLocation?: GeoDecoding;
  currentLocation?: GeoDecoding;
};

const initialState: WeatherState = {
  savedLocations: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSelectedLocation(state, action: PayloadAction<GeoDecoding>) {
      state.selectedLocation = action.payload;
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

export const selectSelectedLocation = (state: RootState) =>
  state.weather.selectedLocation;
export const selectCurrentLocation = (state: RootState) =>
  state.weather.currentLocation;
export const selectSavedLocations = (state: RootState) =>
  state.weather.savedLocations;
export const selectIsLocationSaved = (state: RootState, name: string) =>
  state.weather.savedLocations.findIndex(location => location.name === name) !==
  -1;

export const {setSelectedLocation, saveLocation, removeLocation} =
  weatherSlice.actions;
export default weatherSlice.reducer;
