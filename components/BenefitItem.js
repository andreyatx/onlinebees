import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Variables } from '../constants/styles';

export const BenefitItem = ({ iconName, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons size={18} name={iconName} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
    backgroundColor: Variables.colors.background.primary,
    padding: 12,
    borderRadius: 50,
  },
  descriptionContainer: { maxWidth: 280 },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
    color: Variables.colors.font.secondary,
    flexWrap: 'wrap',
  },
});
