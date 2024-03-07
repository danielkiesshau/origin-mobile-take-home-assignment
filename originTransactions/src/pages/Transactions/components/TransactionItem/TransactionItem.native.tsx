import React from 'react';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import {formatDate} from '@modules/libs/date/date';
import Styled from './TransactionItem.styles';

interface Props {
  transaction: Transaction;
  goToTransactionDetail: (transaction: Transaction) => void;
}

function TransactionItem({transaction, goToTransactionDetail}: Props) {
  return (
    <Styled.Container onPress={() => goToTransactionDetail(transaction)}>
      <Styled.Type type={transaction.type}>{transaction.type}</Styled.Type>
      <Styled.Amount type={transaction.type}>
        {`$${transaction.amount}`}
      </Styled.Amount>
      <Styled.Date>
        {transaction.date && formatDate(transaction.date)}
      </Styled.Date>
    </Styled.Container>
  );
}

export default TransactionItem;
