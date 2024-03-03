import React, {useEffect, useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import LoadingView from '@components/LoadingView/LoadingView.native';
import ErrorView from '@components/ErrorView/ErrorView.native';
import Routes, {RootStackParamList} from '@routes/Routes';
import transactionServiceFactory from '@services/Transactions/TransactionsServiceFactory';
import LocalStorage, {
  LocalStorageKeys,
} from '@modules/libs/localStorage/localStorage';

import TransactionsNative from './Transactions.native';

interface Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    Routes.TRANSACTIONS
  >;
}

function TransactionsContainer({navigation}: Props) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const currentPage = useRef<number>(1);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);

  const getTransactions = async (isFirstLoad?: boolean) => {
    try {
      const service = await transactionServiceFactory();
      const response = await service.getTransactions(currentPage.current);

      const updatedTransactions = isFirstLoad
        ? response
        : [...transactions, ...response];

      setTransactions(updatedTransactions);
      LocalStorage.set(LocalStorageKeys.TRANSACTIONS, updatedTransactions);

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
      currentPage.current += 1;
      getTransactions(false);
    }
  };

  const loadTransactions = async () => {
    setIsRefreshing(true);
    await getTransactions(true);
    setIsRefreshing(false);
  };

  const goToTransactionDetail = (transaction: Transaction) => {
    navigation.push(Routes.TRANSACTION_DETAILS, {transaction});
  };

  useEffect(() => {
    getTransactions(true);
  }, []);

  if (isLoading) {
    return <LoadingView />;
  }

  if (hasError) {
    return <ErrorView onTryAgain={getTransactions} />;
  }

  return (
    <TransactionsNative
      transactions={transactions}
      isRefreshing={isRefreshing}
      goToTransactionDetail={goToTransactionDetail}
      loadNextPage={loadNextPage}
      loadTransactions={loadTransactions}
    />
  );
}

export default TransactionsContainer;
