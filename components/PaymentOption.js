import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Variables } from '../constants/styles';

export const PaymentOption = ({ price, text, prevPrice, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={Variables.colors.background.primary}
        style={styles.hl}
        onPress={onPress}
      >
        <View style={styles.option}>
          {prevPrice ? (
            <Text style={styles.prevPrice}>${prevPrice}/in month</Text>
          ) : null}
          <Text style={styles.price}>${price}/in month</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  option: {
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#D9DBE9',
    textAlign: 'center',
    minHeight: 116,
    minWidth: 270,
    maxWidth: 340,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  prevPrice: {
    textDecorationLine: 'line-through',
  },
  price: {
    color: Variables.colors.font.primary,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: Variables.colors.font.secondary,
    textAlign: 'center',
  },
  hl: {
    borderRadius: 20,
  },
});
