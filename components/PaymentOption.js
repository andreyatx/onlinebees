import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Variables } from '../constants/styles';

export const PaymentOption = ({
  price,
  text,
  prevPrice,
  onPress,
  isDiscount,
  discount,
}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={Variables.colors.background.primary}
        style={styles.hl}
        onPress={onPress}
      >
        <View style={isDiscount ? styles.discount : styles.option}>
          {isDiscount ? (
            <View style={styles.procent}>
              <Text style={styles.procentValue}>{discount}%</Text>
            </View>
          ) : null}

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
    fontFamily: 'Poppins_600SemiBold',
    lineHeight: 26,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: Variables.colors.font.secondary,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  hl: {
    borderRadius: 20,
  },
  discount: {
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Variables.colors.purple,
    textAlign: 'center',
    minHeight: 116,
    minWidth: 270,
    maxWidth: 340,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  procent: {
    position: 'absolute',
    top: 0,
    alignSelf: 'flex-end',
    backgroundColor: Variables.colors.purple,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 30,
    minWidth: 50,
    alignItems: 'center',
  },
  procentValue: {
    color: 'white',
    fontFamily: 'Poppins_400Regular',
  },
});
