import {ActivityIndicator} from 'react-native';
import React from 'react';
import Styled from './LoadingView.styles';

const LoadingView = () => {
  return (
    <Styled.Container>
      <ActivityIndicator />
    </Styled.Container>
  );
};

export default LoadingView;
