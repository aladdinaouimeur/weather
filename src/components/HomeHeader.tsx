import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../constants/colors';
import {useWeather} from '../hooks/useWeather';
import {getLocationName} from '../utils/locationsUtils';

export const HomeHeader = () => {
  const {selectedLocation, navigateToSearch} = useWeather();
  return (
    <Container onPress={navigateToSearch}>
      <Row>
        <Icon name="map-marker" size={20} color={AppColors.offWhite} />
        {selectedLocation ? (
          <Title>{getLocationName(selectedLocation)}</Title>
        ) : (
          <Title>Please select a location first</Title>
        )}
      </Row>
      <Icon name="chevron-right" size={20} color={AppColors.offWhite} />
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  border-radius: 32px;
  margin-top: 8px;
  padding: 12px;
  background-color: ${AppColors.highlight};
  justify-content: space-between;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: ${AppColors.white};
  font-weight: bold;
  margin-left: 12px;
`;
