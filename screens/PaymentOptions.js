import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { PaymentOption } from '../components/PaymentOption';
import { globalStyles } from '../constants/styles';

const DUMMY_OPTIONS = [
  {
    id: 1,
    price: 15,
    text: 'Automatic push notifications to performers',
  },
  {
    id: 2,
    price: 35,
    text: 'Premium status "regular user"',
    prevPrice: 60,
  },
  {
    id: 3,
    price: 30,
    text: 'Premium task design',
  },
];

export const PaymentOptions = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('Tariff');
  };

  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={styles.heading}>Payment Options page</Text>
        <Text style={styles.description}>
          By subscribing, you will receive a number of benefits at a low cost.
          you can choose the most suitable subscription option for yourself.
        </Text>
      </View>

      <View style={styles.paymentOptions}>
        <FlatList
          data={DUMMY_OPTIONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PaymentOption
              price={item.price}
              text={item.text}
              prevPrice={item.prevPrice}
              onPress={pressHandler}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  paymentOptions: {
    marginTop: 16,
    alignItems: 'center',
  },
});
