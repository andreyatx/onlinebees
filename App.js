import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Profile } from './screens/Profile';
import { PaymentOptions } from './screens/PaymentOptions';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='PaymentOptions' component={PaymentOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     backgroundColor: '#EFF0F7',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
