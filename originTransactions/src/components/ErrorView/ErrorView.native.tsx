import React from 'react';
import Styled from './ErrorView.styles';

interface Props {
  onTryAgain: () => void;
}

const ErrorView = ({onTryAgain}: Props) => {
  return (
    <Styled.Container>
      <Styled.Button onPress={onTryAgain}>
        <Styled.Label>Try Again</Styled.Label>
      </Styled.Button>
    </Styled.Container>
  );
};

export default ErrorView;
