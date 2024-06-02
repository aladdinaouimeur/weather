import {useMemo, useState, useEffect} from 'react';

import {useDebounce} from 'use-debounce';
import {
  useGetGeoLocationOfPlaceQuery,
  useGetPlaceFromGeoLocationQuery,
} from '../services/weatherApi';
import {selectSavedLocations, setSelectedLocation} from '../store/weatherSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getUniqueSavedLocations} from '../utils/locationsUtils';
import Geolocation from '@react-native-community/geolocation';
import {skipToken} from '@reduxjs/toolkit/query/react';
import {GeoDecoding} from '../models/GeoDecoding';

const DEBOUNCE_INTERVAL = 300;

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const [isGettingCoordinates, setIsGettingCoordinates] = useState(false);
  const [currentCoordinates, setCurrentCoordinates] = useState<{
    lat: number;
    lon: number;
  }>();

  const {data: currentLocation, isLoading: isGettingCurrentLocation} =
    useGetPlaceFromGeoLocationQuery(currentCoordinates ?? skipToken);

  const [searchText, setSearchText] = useState('');
  const [queryText] = useDebounce(searchText, DEBOUNCE_INTERVAL);

  const savedLocations = useAppSelector(selectSavedLocations);
  const {
    data: apiSuggestions,
    isError,
    isLoading,
  } = useGetGeoLocationOfPlaceQuery(queryText, {
    skip: queryText.length < 2,
  });

  useEffect(() => {
    setIsGettingCoordinates(true);
    Geolocation.getCurrentPosition(info => {
      setCurrentCoordinates({
        lat: info.coords.latitude,
        lon: info.coords.longitude,
      });
      setIsGettingCoordinates(false);
    });
  }, []);

  const suggestionsList = useMemo(
    () => [
      {
        title: 'Search results: ',
        data: apiSuggestions ?? [],
      },
      {
        title: 'Saved Locations: ',
        data: getUniqueSavedLocations(savedLocations, apiSuggestions ?? []),
      },
    ],
    [apiSuggestions, savedLocations],
  );

  const selectLocation = (location: GeoDecoding) => {
    dispatch(setSelectedLocation(location));
  };

  return {
    isGettingCurrentLocation: isGettingCoordinates || isGettingCurrentLocation,
    currentLocation,
    isError,
    isLoading,
    suggestionsList,
    setSearchText,
    selectLocation,
  };
};
