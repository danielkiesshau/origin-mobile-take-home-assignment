import React from 'react';
import Label from '@components/Label/Label.native';
import Styled from './InfoLabel.styles';

interface Props {
  label: string;
  value: string | number;
}

function InfoLabel({label, value}: Props) {
  return (
    <Styled.Container>
      <Styled.LabelBold>{`${label}:`}</Styled.LabelBold>
      <Label>{value}</Label>
    </Styled.Container>
  );
}

export default InfoLabel;
