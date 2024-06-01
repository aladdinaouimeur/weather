import React from 'react';
import styled from '@emotion/native';
import {AppColors} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GeoDecoding} from '../models/GeoDecoding';

type Props = {
  data: GeoDecoding;
};

export const LocationSearchRow = ({data}: Props) => {
  return (
    <Row>
      <IconContainer>
        <Icon name="city" size={20} color={AppColors.white} />
      </IconContainer>
      <Column>
        <Title>{data?.local_names?.nl ?? data.name}</Title>
      </Column>
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
`;

const IconContainer = styled.View`
  padding: 8px;
  border-radius: 100px;

  background-color: ${AppColors.highlight};
`;

const Title = styled.Text`
  color: ${AppColors.white};
`;
