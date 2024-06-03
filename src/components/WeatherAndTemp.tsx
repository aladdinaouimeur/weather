import React from 'react';
import styled from '@emotion/native';
import {WeatherLottie} from './WeatherLottie';
import {AppColors} from '../constants/colors';

import {useWeather} from '../hooks/useWeather';

export const WeatherAndTemp = () => {
  const {weatherData} = useWeather();
  if (!weatherData) {
    return null;
  }

  return (
    <Column>
      <WeatherLottie iconCode={weatherData.weather[0].icon} />
      <Temperature>{`${weatherData.main.temp.toFixed(0)} °C`}</Temperature>
      <Description>{weatherData.weather[0].description}</Description>
    </Column>
  );
};

const Column = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Temperature = styled.Text`
  color: ${AppColors.offWhite};
  font-size: 36px;
  font-weight: bold;
  margin-top: 12px;
`;

const Description = styled.Text`
  color: ${AppColors.offWhite};
  font-style: italic;
  margin-top: 12px;
`;
