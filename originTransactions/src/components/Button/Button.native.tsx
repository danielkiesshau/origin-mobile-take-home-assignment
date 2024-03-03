import React from 'react';
import Styled from './Button.styles';

interface Props {
  onPress: () => void;
  label: string;
}

const Button = ({onPress, label}: Props) => {
  return (
    <Styled.Button onPress={onPress}>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Button>
  );
};

export default Button;
