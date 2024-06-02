import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../constants/colors';
import {ActivityIndicator} from 'react-native';

type Props = {
  isGettingCurrentLocation: boolean;
};
export const CurrentLocationHeader = ({isGettingCurrentLocation}: Props) => {
  return (
    <Row>
      {isGettingCurrentLocation ? (
        <ActivityIndicator />
      ) : (
        <Icon color={AppColors.secondary} size={20} name="crosshairs-gps" />
      )}
      <StyledText>Current Location</StyledText>
    </Row>
  );
};

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text`
  margin-left: 8px;
  color: ${AppColors.secondary};
  font-weight: bold;
`;
