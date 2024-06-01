import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  icon: string;
  iconColor?: string;
  iconSize?: number;
  onPress: () => void;
} & TouchableOpacityProps;

export const IconButton = ({icon, iconColor, iconSize, ...props}: Props) => {
  return (
    <TouchableOpacity {...props}>
      <Icon size={iconSize} name={icon} color={iconColor} />
    </TouchableOpacity>
  );
};
