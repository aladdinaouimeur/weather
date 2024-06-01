import React, {useState} from 'react';
import {PageContainer} from '../components/PageContainer';
import {SuggestedSearch} from '../components/SuggestedSearch';
import {SearchBody} from '../components/SearchBody';
import {useDebounce} from 'use-debounce';
import {useGetGeoLocationOfPlaceQuery} from '../services/weatherApi';

const DEBOUNCE_INTERVAL = 300;

export const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [queryText] = useDebounce(searchText, DEBOUNCE_INTERVAL);
  const {
    data: suggestionsList,
    isError,
    isLoading,
  } = useGetGeoLocationOfPlaceQuery(queryText, {
    skip: searchText.length < 2,
  });

  return (
    <PageContainer>
      <SuggestedSearch onTextChange={setSearchText} />
      <SearchBody
        suggestions={suggestionsList}
        isError={isError}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};
