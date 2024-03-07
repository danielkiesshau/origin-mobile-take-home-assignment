import React from 'react';
import {Button, StyleProp, View, ViewStyle} from 'react-native';
import {palette} from '@theme/palette';

interface Props {
  onPress: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
}

const ButtonNative = ({style, onPress, label}: Props) => {
  return (
    <View style={style}>
      <Button onPress={onPress} title={label} color={palette.PRIMARY_COLOR} />
    </View>
  );
};

export default ButtonNative;
