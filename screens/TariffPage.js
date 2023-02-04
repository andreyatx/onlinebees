import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from './../constants/styles';

const DUMMY_BENEFITS = [
  {
    id: 1,
    text: 'Raising an ad once a week, but no more than 2 ads per week',
  },
  {
    id: 2,
    text: 'The ability to sort employees by rating and number of reviews',
  },
  {
    id: 3,
    text: 'Partial deactivation of ads',
  },
  {
    id: 4,
    text: ` Premium status "regular user" after 5 completed transactions`,
  },
  {
    id: 5,
    text: 'Activity points system',
  },
];

export const TariffPage = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.heading}>
        <Text>Your payment options:</Text>
        <Text>Hot Work</Text>
      </View>
      <View style={styles.pricing}>
        <Text>$35/in month</Text>
      </View>
      <Button title='Change payment options' />
    </View>
  );
};

const styles = StyleSheet.create({});
