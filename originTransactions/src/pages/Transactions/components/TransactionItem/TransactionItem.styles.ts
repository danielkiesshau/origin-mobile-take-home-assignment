import styled from 'styled-components/native';
import {TransactionType} from '@modules/DTOs/Transactions/TransactionDTO';
import {palette} from '@theme/palette';

const ColorsByType = {
  [TransactionType.DEPOSIT]: palette.GREEN_1,
  [TransactionType.WITHDRAWAL]: palette.RED_1,
  [TransactionType.INVOICE]: palette.ORANGE_1,
  [TransactionType.PAYMENT]: palette.BLUE_1,
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 80px;
  border-bottom-width: 0.2px;
  bottom-border-color: red;
`;

interface LabelProps {
  type: TransactionType;
}

const getColorByType = ({type}: LabelProps) => ColorsByType[type];

const Type = styled.Text<LabelProps>`
  padding-left: 16px;
  flex: 0.5;
  text-transform: capitalize;
  color: ${getColorByType};
`;

const Amount = styled.Text<LabelProps>`
  flex: 1;
  width: 60px;
  text-align: center;
  color: ${getColorByType};
`;

const Date = styled.Text`
  width: 110px;
  text-align: center;
`;

export default {
  Container,
  Type,
  Amount,
  Date,
};
