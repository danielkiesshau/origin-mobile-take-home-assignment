import React, {useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Transaction} from '@modules/DTOs/Transactions/TransactionDTO';
import Button from '@components/Button/Button.native';
import {formatDate} from '@modules/libs/date/date';
import Label from '@components/Label/Label.native';
import Styled from './TransactionDetails.styles';
import InfoLabel from './components/InfoLabel.native';
import {Platform} from 'react-native';

interface Props {
  transaction: Transaction;
  updateTransactionLocation: () => void;
}

function TransactionDetailsNative({
  transaction,
  updateTransactionLocation,
}: Props) {
  const mapRef = React.createRef<MapView>();
  const region = {
    latitude: transaction.lat,
    longitude: transaction.lon,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  };

  useEffect(() => {
    mapRef.current?.animateToRegion(region);
  }, [transaction]);

  return (
    <Styled.Container>
      <Styled.ContainerContent>
        <Styled.Row>
          <Label>{`#${transaction.id}`}</Label>
          <Label>{formatDate(transaction.date)}</Label>
        </Styled.Row>
        <Styled.AmountLabel>{`$${transaction.amount}`}</Styled.AmountLabel>
        <Styled.ContainerReceiptImage>
          {transaction.receiptImage && (
            <Styled.ReceiptImage source={{uri: transaction.receiptImage}} />
          )}
        </Styled.ContainerReceiptImage>
        <Button label="Update Location" onPress={updateTransactionLocation} />

        <InfoLabel label="Type" value={transaction.type} />
        <InfoLabel label="Category" value={transaction.category} />
        {Platform.OS === 'android' && (
          <>
            <InfoLabel label="Lat" value={transaction.lat} />
            <InfoLabel label="Long" value={transaction.lon} />
          </>
        )}
      </Styled.ContainerContent>
      {Platform.OS === 'ios' && (
        <Styled.Map initialRegion={region} ref={mapRef}>
          <Marker
            coordinate={{
              latitude: transaction.lat,
              longitude: transaction.lon,
            }}
          />
        </Styled.Map>
      )}
    </Styled.Container>
  );
}

export default TransactionDetailsNative;
