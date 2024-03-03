import React from 'react';
import Styled from './ErrorView.styles';
import Button from '@components/Button/Button.native';

interface Props {
  onTryAgain: () => void;
}

const ErrorView = ({onTryAgain}: Props) => {
  return (
    <Styled.Container>
      <Button onPress={onTryAgain} label="Try Again" />
    </Styled.Container>
  );
};

export default ErrorView;
