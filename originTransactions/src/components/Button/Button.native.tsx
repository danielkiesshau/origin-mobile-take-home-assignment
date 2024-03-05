import React from 'react';
import {Button} from 'react-native';

interface Props {
  onPress: () => void;
  label: string;
}

const ButtonNative = ({onPress, label}: Props) => {
  return <Button onPress={onPress} title={label} />;
};

export default ButtonNative;
