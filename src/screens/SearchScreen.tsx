import React from 'react';
import {PageContainer} from '../components/PageContainer';
import {SuggestedSearch} from '../components/SuggestedSearch';
import {SearchBody} from '../components/SearchBody';
import {useSearch} from '../hooks/useSearch';

export const SearchScreen = () => {
  const {
    isGettingCurrentLocation,
    currentLocation,
    setSearchText,
    isError,
    isLoading,
    suggestionsList,
  } = useSearch();
  return (
    <PageContainer>
      <SuggestedSearch onTextChange={setSearchText} />
      <SearchBody
        currentLocation={currentLocation}
        isGettingCurrentLocation={isGettingCurrentLocation}
        locationSections={suggestionsList}
        isError={isError}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};
