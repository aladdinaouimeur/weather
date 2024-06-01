import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../constants/colors';

export const CurrentLocationRow = () => {
  return (
    <Row>
      <Icon color={AppColors.secondary} size={20} name="crosshairs-gps" />
      <StyledText>Current Location</StyledText>
    </Row>
  );
};

const Row = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text`
  margin-left: 8px;
  color: ${AppColors.secondary};
  font-weight: bold;
`;
