import React, {useEffect, useState} from 'react';
import TransactionsService from '@modules/services/TransactionsService';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import TransactionsNative from './Transactions.native';
import LoadingView from '@components/LoadingView/LoadingView.native';
import ErrorView from '@components/ErrorView/ErrorView.native';

function TransactionsContainer() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);

  const getTransactions = async () => {
    try {
      setLoading(true);

      const service = new TransactionsService();
      const response = await service.getTransactions(1, 15);
      setTransactions(response);

      if (hasError) {
        setError(false);
      }
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  if (isLoading) {
    return <LoadingView />;
  }

  if (hasError) {
    return <ErrorView onTryAgain={getTransactions} />;
  }

  return <TransactionsNative transactions={transactions} />;
}

export default TransactionsContainer;
