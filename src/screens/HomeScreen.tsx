import React from 'react';
import {HomeHeader} from '../components/HomeHeader';
import {PageContainer} from '../components/PageContainer';
import styled from '@emotion/native';
import {WeatherAndTemp} from '../components/WeatherAndTemp';
import {WindIndication} from '../components/WindIndication';

export const HomeScreen = () => {
  return (
    <PageContainer>
      <Column>
        <HomeHeader />
        <WeatherAndTemp />
        <WindIndication />
      </Column>
    </PageContainer>
  );
};

const Column = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
`;
