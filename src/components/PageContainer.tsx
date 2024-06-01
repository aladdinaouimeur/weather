import styled from '@emotion/native';
import React, {PropsWithChildren} from 'react';
import {AppColors} from '../constants/colors';

export const PageContainer = (props: PropsWithChildren) => {
  return <StyledContainer style={{flex: 1}}>{props.children}</StyledContainer>;
};

const StyledContainer = styled.SafeAreaView`
  background-color: ${AppColors.primary};
`;
