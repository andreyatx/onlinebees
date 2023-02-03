import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { Profile } from './screens/Profile';
import { PaymentOptions } from './screens/PaymentOptions';
import { Work } from './screens/Work';
import { Chat } from './screens/Chat';
import { Task } from './screens/Task';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/styles';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.background.primary,
        },
        headerTintColor: GlobalStyles.colors.font.primary,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.background.primary,
        },
        tabBarActiveTintColor: GlobalStyles.colors.purple,
      }}
    >
      <Tab.Screen
        name='Work'
        component={Work}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search-outline' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Task'
        component={Task}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='clipboard-outline' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Chat'
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbubbles-outline' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' size={size} color={color} />
          ),
        }}
      />
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
            name='BottomTabs'
            component={BottomTabs}
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
