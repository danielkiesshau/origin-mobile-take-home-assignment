import React from 'react';
import {Text, View} from 'react-native';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';

interface Props {
  transaction: Transaction;
}

function TransactionItem({transaction}: Props) {
  return (
    <View style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{transaction.amount}</Text>
    </View>
  );
}

export default TransactionItem;
