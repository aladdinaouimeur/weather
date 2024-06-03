import React from 'react';
import styled from '@emotion/native';
import {IconButton} from './IconButton';
import {AppColors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

type Props = {
  onTextChange: (text: string) => void;
};

export const SuggestedSearch = ({onTextChange}: Props) => {
  const {goBack} = useNavigation();

  return (
    <InputRow>
      <StyledBackIcon
        iconColor={AppColors.white}
        iconSize={16}
        icon="left"
        onPress={goBack}
      />
      <StyledInput
        placeholderTextColor={AppColors.white}
        onChangeText={onTextChange}
        placeholder="Search for a location"
      />
    </InputRow>
  );
};

const InputRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;

  border-bottom-color: ${AppColors.divider};
`;

const StyledInput = styled.TextInput`
  width: 100%;
  color: ${AppColors.white};
`;

const StyledBackIcon = styled(IconButton)`
  padding: 12px;
  margin-right: 8px;
`;
