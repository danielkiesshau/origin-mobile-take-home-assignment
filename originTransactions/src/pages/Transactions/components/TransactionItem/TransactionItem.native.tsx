import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';

interface Props {
  transaction: Transaction;
  goToTransactionDetail: (transaction: Transaction) => void;
}

function TransactionItem({transaction, goToTransactionDetail}: Props) {
  return (
    <TouchableOpacity
      onPress={() => goToTransactionDetail(transaction)}
      style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{transaction.amount}</Text>
    </TouchableOpacity>
  );
}

export default TransactionItem;
