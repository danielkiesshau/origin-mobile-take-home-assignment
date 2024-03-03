import React, {useState} from 'react';
import {Alert} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import Routes, {RootStackParamList} from '@routes/Routes';
import ErrorView from '@components/ErrorView/ErrorView.native';
import GeoLocation from '@modules/libs/geoLocation/GeoLocation';
import transactionServiceFactory from '@modules/services/Transactions/TransactionsServiceFactory';
import TransactionDetailsNative from './TransactionDetails.native';

interface Props {
  route: RouteProp<RootStackParamList, Routes.TRANSACTION_DETAILS>;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    Routes.TRANSACTION_DETAILS
  >;
}

function TransactionDetailsContainer({route, navigation}: Props) {
  const [hasError, setError] = useState({
    status: false,
    message: '',
  });
  const [transactionDetail, setTransaction] = useState(
    route.params.transaction,
  );

  const validateGeoPermission = async (): Promise<boolean> => {
    const hasLocationPermission = await GeoLocation.requestAuthorization();

    if (!hasLocationPermission) {
      Alert.alert('GeoLocation is needed to update the transaction location');
      return false;
    }

    return true;
  };

  const getLocation = async (
    updateTransaction: (lat: number, lon: number) => Promise<void>,
  ) => {
    const cantGetGeo = await validateGeoPermission();

    if (!cantGetGeo) {
      setError({
        status: true,
        message: 'Permission needed to get location',
      });
      return;
    }

    GeoLocation.getCurrentPosition(
      geo => {
        updateTransaction(geo.coords.latitude, geo.coords.longitude);
      },
      () => {
        setError({
          status: true,
          message: 'Error getting location',
        });
      },
    );
  };

  const updateTransactionLocation = async () => {
    const updateTransaction = async (lat: number, lon: number) => {
      try {
        const service = await transactionServiceFactory();
        await service.updateTransactionLocation(transactionDetail.id, lat, lon);
        setTransaction({
          ...transactionDetail,
          lat,
          lon,
        });
      } catch (err) {
        setError({
          status: true,
          message: 'Error updating location',
        });
      }
    };

    await getLocation(updateTransaction);
  };

  if (hasError.status) {
    return <ErrorView onTryAgain={navigation.goBack} />;
  }

  return (
    <TransactionDetailsNative
      transaction={transactionDetail}
      updateTransactionLocation={updateTransactionLocation}
    />
  );
}

export default TransactionDetailsContainer;
