import React, {useEffect} from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useWeather} from '../hooks/useWeather';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {AppColors} from '../constants/colors';
import {mpsToKmh} from '../utils/windUtils';

export const WindIndication = () => {
  const {weatherData} = useWeather();
  const windDeg = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{rotate: `${windDeg.value}deg`}],
  }));

  useEffect(() => {
    if (weatherData?.wind.deg) {
      windDeg.value = withDelay(
        1000,
        withSpring(weatherData.wind.deg, {
          duration: 1000,
        }),
      );
    }
  }, [weatherData, windDeg]);

  if (!weatherData) {
    return null;
  }

  return (
    <Container>
      <Row>
        <Animated.View style={[styles.container, animatedStyles]}>
          <Icon color={AppColors.offWhite} size={40} name="arrow-up-thin" />
        </Animated.View>
        <StyledText>{`${mpsToKmh(
          weatherData?.wind.speed ?? 0,
        )} km/h`}</StyledText>
      </Row>
    </Container>
  );
};

const Row = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${AppColors.highlight};
  border-radius: 32px;
`;

const Container = styled.View``;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${AppColors.offWhite};
  margin-left: 12px;
`;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
});
