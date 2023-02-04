import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { globalStyles, Variables } from './../constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { BenefitItem } from '../components/BenefitItem';
import { LinearGradient } from 'expo-linear-gradient';

const DUMMY_BENEFITS = [
  {
    id: 1,
    iconName: 'thumbs-up-outline',
    text: 'Raising an ad once a week, but no more than 2 ads per week',
  },
  {
    id: 2,
    iconName: 'options-outline',
    text: 'The ability to sort employees by rating and number of reviews',
  },
  {
    id: 3,
    iconName: 'close-outline',
    text: 'Partial deactivation of ads',
  },
  {
    id: 4,
    iconName: 'happy-outline',
    text: `Premium status "regular user" after 5 completed transactions`,
  },
  {
    id: 5,
    iconName: 'star-outline',
    text: 'Activity points system',
  },
];

export const TariffPage = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.heading}>
        <Text style={styles.header}>Your payment options:</Text>
        <Text style={styles.description}>
          Hot Work <Ionicons name='flame' size={32} />
        </Text>
      </View>

      <View style={styles.pricing}>
        <Text style={styles.pricingText}>$35/in month</Text>
      </View>

      <View style={styles.benefits}>
        <FlatList
          data={DUMMY_BENEFITS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BenefitItem iconName={item.iconName} description={item.text} />
          )}
        />
      </View>
      <LinearGradient
        style={styles.buttonContainer}
        colors={['#7433FF', '#FFA3FD']}
        start={{ x: 0, y: 0 }}
      >
        <Pressable>
          <Text style={styles.button}>Change payment options</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: { marginBottom: 24 },
  header: {
    fontSize: 32,
    color: Variables.colors.font.primary,
    fontFamily: 'Poppins_700Bold',
  },
  description: {
    fontSize: 32,
    fontFamily: 'Poppins_700Bold',
    color: Variables.colors.pink,
  },
  pricing: {
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#D9DBE9',
    marginBottom: 24,
  },
  pricingText: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: Variables.colors.font.primary,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  button: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
  },
});
