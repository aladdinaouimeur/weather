import React from 'react';
import styled from '@emotion/native';
import {GeoDecoding} from '../models/GeoDecoding';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {
  removeLocation,
  saveLocation,
  selectIsLocationSaved,
} from '../store/weatherSlice';
import {AppColors} from '../constants/colors';

type Props = {
  location: GeoDecoding;
};

export const LocationSaveButton = ({location}: Props) => {
  const isLocationSaved = useAppSelector(state =>
    selectIsLocationSaved(state, location.name),
  );
  const dispatch = useAppDispatch();

  const toggleSaved = () => {
    if (isLocationSaved) {
      dispatch(removeLocation(location));
    } else {
      dispatch(saveLocation(location));
    }
  };

  return (
    <ButtonContainer onPress={toggleSaved}>
      <StyledText>{isLocationSaved ? 'Remove' : 'Save'}</StyledText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 32px;
  color: ${AppColors.white};
  background-color: ${AppColors.highlight};
  padding: 8px;
  position: absolute;
  align-self: center;
  right: 0;
`;

const StyledText = styled.Text`
  color: ${AppColors.white};
`;
