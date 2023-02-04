import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Profile } from './screens/Profile';
import { PaymentOptions } from './screens/PaymentOptions';
import { Work } from './screens/Work';
import { Chat } from './screens/Chat';
import { Task } from './screens/Task';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Variables } from './constants/styles';
import { TariffPage } from './screens/TariffPage';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle: {
          backgroundColor: Variables.colors.background.primary,
        },
        headerTintColor: Variables.colors.font.primary,
        tabBarStyle: {
          backgroundColor: Variables.colors.background.primary,
        },
        tabBarActiveTintColor: Variables.colors.purple,
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
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
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
        <Stack.Screen name='Payment Options' component={PaymentOptions} />
        <Stack.Screen
          name='Tariff'
          component={TariffPage}
          options={{
            title: 'Payment Options',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
