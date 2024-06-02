import React, {useMemo, useState} from 'react';
import {PageContainer} from '../components/PageContainer';
import {SuggestedSearch} from '../components/SuggestedSearch';
import {SearchBody} from '../components/SearchBody';
import {useDebounce} from 'use-debounce';
import {useGetGeoLocationOfPlaceQuery} from '../services/weatherApi';
import {selectSavedLocations} from '../store/weatherSlice';
import {useAppSelector} from '../store/hooks';
import {getUniqueSavedLocations} from '../utils/locationsUtils';

const DEBOUNCE_INTERVAL = 300;

export const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [queryText] = useDebounce(searchText, DEBOUNCE_INTERVAL);

  const savedLocations = useAppSelector(selectSavedLocations);
  const {
    data: apiSuggestions,
    isError,
    isLoading,
  } = useGetGeoLocationOfPlaceQuery(queryText, {
    skip: searchText.length < 2,
  });

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

  return (
    <PageContainer>
      <SuggestedSearch onTextChange={setSearchText} />
      <SearchBody
        locationSections={suggestionsList}
        isError={isError}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};
