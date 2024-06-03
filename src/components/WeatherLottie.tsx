import React from 'react';
import LottieView from 'lottie-react-native';
import {getLottieFromWeatherIcon} from '../utils/weatherIconUtils';
import styled from '@emotion/native';

type Props = {
  iconCode: string;
};
export const WeatherLottie = ({iconCode}: Props) => {
  return (
    <CenterContainer>
      <LottieView
        style={{height: 200, width: 200, marginLeft: 20}}
        resizeMode="center"
        containerProps={{
          style: {
            margin: 0,
            padding: 0,
          },
        }}
        autoPlay
        loop
        source={getLottieFromWeatherIcon(iconCode)}
      />
    </CenterContainer>
  );
};

const CenterContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;
