import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import WorkoutScreen from './src/Screens/WorkoutScreen';
import TimerScreen from './src/Screens/TimerScreen';
import CalculationScreen from './src/Screens/CalculationScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  function TabNavigator() {
    return(
      <Tab.Navigator>
        <Tab.Screen name='Workout' component={WorkoutScreen} />
        <Tab.Screen name='Timer' component={TimerScreen} />
        <Tab.Screen name='Calculation' component={CalculationScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}