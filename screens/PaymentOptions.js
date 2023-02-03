import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

export const PaymentOptions = () => {
  return (
    <View style={styles.container}>
      <Text>Payment Options page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
