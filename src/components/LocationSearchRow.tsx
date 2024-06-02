import React from 'react';
import styled from '@emotion/native';
import {AppColors} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GeoDecoding} from '../models/GeoDecoding';
import {LocationSaveButton} from './LocationSaveButton';
import {useSearch} from '../hooks/useSearch';

type Props = {
  data: GeoDecoding;
};

export const LocationSearchRow = ({data}: Props) => {
  const {selectLocation} = useSearch();

  const handleOnPress = () => {
    selectLocation(data);
  };

  return (
    <Row onPress={handleOnPress}>
      <IconContainer>
        <Icon name="city" size={20} color={AppColors.white} />
      </IconContainer>
      <Column>
        <Title>{`${data?.local_names?.nl ?? data.name}, ${data.state}`}</Title>
      </Column>
      <LocationSaveButton location={data} />
    </Row>
  );
};

const Column = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Row = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 12px;
  position: relative;
`;

const IconContainer = styled.View`
  padding: 8px;
  border-radius: 100px;
  background-color: ${AppColors.highlight};
`;

const Title = styled.Text`
  color: ${AppColors.white};
`;
