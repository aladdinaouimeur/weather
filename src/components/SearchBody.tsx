import styled from '@emotion/native';
import React, {useMemo} from 'react';
import {CurrentLocationRow} from './CurrentLocationRow';
import {LocationSearchRow} from './LocationSearchRow';
import {GeoDecoding} from '../models/GeoDecoding';
import {
  ListRenderItemInfo,
  SectionList,
  SectionListData,
  Text,
} from 'react-native';
import {AppColors} from '../constants/colors';

type SectionType = {title: string; data: GeoDecoding[]};
type Props = {
  locationSections: SectionType[];
  isLoading: boolean;
  isError: boolean;
};

export const SearchBody = ({isError, isLoading, locationSections}: Props) => {
  const renderTitle = (item: {
    section: SectionListData<GeoDecoding, SectionType>;
  }) => {
    return item.section.data?.length > 0 ? (
      <Title>{item.section.title}</Title>
    ) : (
      <></>
    );
  };
  const itemRenderer = (item: ListRenderItemInfo<GeoDecoding>) => {
    return <LocationSearchRow key={item.index} data={item.item} />;
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
        renderSectionHeader={item => renderTitle(item)}
        sections={locationSections ?? []}
        renderItem={itemRenderer}
      />
    );
  }, [isError, isLoading, locationSections]);

  return (
    <Column>
      <CurrentLocationRow />
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
