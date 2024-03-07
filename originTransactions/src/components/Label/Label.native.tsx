import {TextProps} from 'react-native';
import React from 'react';
import Styled from './Label.styles';

const Label = ({children, ...rest}: TextProps) => {
  return <Styled.Label {...rest}>{children}</Styled.Label>;
};

export default Label;
