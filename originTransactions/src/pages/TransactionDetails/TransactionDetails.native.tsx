import React from 'react';
import {Image, Text, View} from 'react-native';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import Button from '@components/Button/Button.native';

interface Props {
  transaction: Transaction;
  updateTransactionLocation: () => void;
}

function TransactionDetailsNative({
  transaction,
  updateTransactionLocation,
}: Props) {
  return (
    <View>
      <Text>{`ID ${transaction.id}`}</Text>
      <Text>{`Amount ${transaction.amount}`}</Text>
      <Text>{`Date ${transaction.date}`}</Text>
      <Text>{`Vendor ${transaction.vendor}`}</Text>
      <Text>{`Type ${transaction.type}`}</Text>
      <Text>{`Category ${transaction.category}`}</Text>
      <Text>{`Lat ${transaction.lat}`}</Text>
      <Text>{`Long ${transaction.lon}`}</Text>
      {transaction.receiptImage && (
        <Image
          style={{height: 80, width: 80}}
          source={{uri: transaction.receiptImage}}
        />
      )}
      <Button label="Update Location" onPress={updateTransactionLocation} />
    </View>
  );
}

export default TransactionDetailsNative;
