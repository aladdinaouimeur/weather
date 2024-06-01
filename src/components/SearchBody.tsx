import styled from '@emotion/native';
import React, {useMemo} from 'react';
import {CurrentLocationRow} from './CurrentLocationRow';
import {LocationSearchRow} from './LocationSearchRow';
import {GeoDecoding} from '../models/GeoDecoding';
import {FlatList, ListRenderItemInfo, Text} from 'react-native';

type Props = {
  suggestions?: GeoDecoding[];
  isLoading: boolean;
  isError: boolean;
};

export const SearchBody = ({isError, isLoading, suggestions}: Props) => {
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
    if (suggestions?.length === 0) {
      return <Text>No data</Text>;
    }
    return <FlatList data={suggestions ?? []} renderItem={itemRenderer} />;
  }, [isError, isLoading, suggestions]);

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
