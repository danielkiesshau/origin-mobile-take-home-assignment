import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TransactionsService from '@modules/services/TransactionsService';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import LoadingView from '@components/LoadingView/LoadingView.native';
import ErrorView from '@components/ErrorView/ErrorView.native';
import Routes, {RootStackParamList} from '@routes/Routes';
import TransactionsNative from './Transactions.native';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    Routes.TRANSACTIONS
  >;
}

function TransactionsContainer({navigation}: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentPage, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);

  const getTransactions = async () => {
    try {
      const service = new TransactionsService();
      const response = await service.getTransactions(currentPage);
      setTransactions([...transactions, ...response]);

      if (hasError) {
        setError(false);
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  const loadNextPage = () => {
    if (!isLoading) {
      setPage(curr => curr + 1);
    }
  };

  const goToTransactionDetail = (transaction: Transaction) => {
    navigation.push(Routes.TRANSACTION_DETAILS, {transaction});
  };

  useEffect(() => {
    getTransactions();
  }, [currentPage]);

  if (isLoading) {
    return <LoadingView />;
  }

  if (hasError) {
    return <ErrorView onTryAgain={getTransactions} />;
  }

  return (
    <TransactionsNative
      transactions={transactions}
      goToTransactionDetail={goToTransactionDetail}
      loadNextPage={loadNextPage}
    />
  );
}

export default TransactionsContainer;
