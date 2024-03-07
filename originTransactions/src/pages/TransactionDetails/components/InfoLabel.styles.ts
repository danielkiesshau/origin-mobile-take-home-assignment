import styled from 'styled-components/native';
import {palette} from '@theme/palette';
import Label from '@components/Label/Label.native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  jusfiy-content: space-between;
  width: 150px;
`;
const LabelBold = styled(Label)`
  align-self: center;
  color: ${palette.BLACK_1};
  font-weight: bold;
  margin-right: 8px;
`;

export default {
  LabelBold,
  Container,
};
