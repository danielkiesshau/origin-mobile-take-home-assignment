import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import {palette} from '@theme/palette';

const Container = styled.View`
  flex: 1;
  padding-top: 16px;
`;

const ContainerContent = styled.View`
  padding: 0px 16px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;
`;

const ContainerReceiptImage = styled.View`
  align-self: stretch;
  align-items: center;
  padding-vertical: 16px;
`;

const ReceiptImage = styled.Image`
  height: 240px;
  width: 240px;
`;

const AmountLabel = styled.Text`
  font-size: 24px;
  align-self: center;
  color: ${palette.BLACK_1};
`;

const Map = styled(MapView)`
  height: 300px;
  width: 100%;
  margin-top: 16px;
`;

export default {
  Container,
  ContainerContent,
  Row,
  AmountLabel,
  ContainerReceiptImage,
  ReceiptImage,
  Map,
};
