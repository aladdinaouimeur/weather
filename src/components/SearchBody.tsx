import styled from '@emotion/native';
import React, {useMemo} from 'react';
import {CurrentLocationHeader} from './CurrentLocationHeader';
import {LocationSearchRow} from './LocationSearchRow';
import {GeoDecoding} from '../models/GeoDecoding';
import {
  ListRenderItemInfo,
  SectionList,
  SectionListData,
  Text,
} from 'react-native';
import {AppColors} from '../constants/colors';
import {SEARCH_SECTION_KEY} from '../hooks/useSearch';

type SectionType = {title: string; data: GeoDecoding[]};

type Props = {
  locationSections: SectionType[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  currentLocation?: GeoDecoding;
  isGettingCurrentLocation: boolean;
};

type SectionItemType = {section: SectionListData<GeoDecoding, SectionType>};

export const SearchBody = ({
  isError,
  isLoading,
  locationSections,
  currentLocation,
  isSuccess,
  isGettingCurrentLocation,
}: Props) => {
  const renderTitle = (item: SectionItemType) => {
    return item.section.key !== SEARCH_SECTION_KEY || isSuccess ? (
      <Title>{item.section.title}</Title>
    ) : (
      <></>
    );
  };
  const itemRenderer = (item: ListRenderItemInfo<GeoDecoding>) => {
    return <LocationSearchRow key={item.index} data={item.item} />;
  };

  const renderNoSearchResults = (item: SectionItemType) => {
    return item.section.data.length === 0 && isSuccess ? (
      <Title>
        No search results, try with a different name or/and spelling
      </Title>
    ) : (
      <></>
    );
  };

  const renderBody = useMemo(() => {
    if (isLoading) {
      return <Text>isLoading</Text>;
    }
    if (isError) {
      return <Text>isError</Text>;
    }
    if (locationSections?.length === 0) {
      return <Text>No data</Text>;
    }
    return (
      <SectionList
        bounces={false}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={renderTitle}
        sections={locationSections ?? []}
        renderSectionFooter={renderNoSearchResults}
        renderItem={itemRenderer}
        keyExtractor={(item, index) => item.name + index}
      />
    );
  }, [isError, isLoading, locationSections]);

  return (
    <Column>
      <CurrentLocationHeader
        isGettingCurrentLocation={isGettingCurrentLocation}
      />
      {currentLocation && (
        <LocationSearchRow key={currentLocation.name} data={currentLocation} />
      )}
      {renderBody}
    </Column>
  );
};

const Column = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${AppColors.white};
  margin-top: 24px;
`;
