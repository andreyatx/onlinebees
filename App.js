import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Profile } from './screens/Profile';
import { PaymentOptions } from './screens/PaymentOptions';
import { Work } from './screens/Work';
import { Chat } from './screens/Chat';
import { Task } from './screens/Task';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Work' component={Work} />
      <Tab.Screen name='Task' component={Task} />
      <Tab.Screen name='Chat' component={Chat} />
    </Tab.Navigator>
  );
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen
            name='BottomTabNavigator'
            component={BottomTabNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='PaymentOptions' component={PaymentOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
