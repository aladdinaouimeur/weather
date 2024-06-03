import {GeoDecoding} from '../models/GeoDecoding';

export const getUniqueSavedLocations = (
  savedLocations: GeoDecoding[],
  apiLocations: GeoDecoding[],
) => {
  const apiNames = apiLocations.map(location => location.name);
  return savedLocations.filter(
    savedLocation => !apiNames.includes(savedLocation.name),
  );
};

export const getLocationName = (location: GeoDecoding) => {
  if (location.state) {
    return `${location.name}, ${location.state}`;
  }
  return location.name;
};
