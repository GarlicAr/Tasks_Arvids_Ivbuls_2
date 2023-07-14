import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenHome } from './src/screens/ScreenHome';
import { ScreenHabitAdd } from './src/screens/ScreenHabitAdd';
import { ScreenSettings } from './src/screens/ScreenSettings';

export function App() {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Hello World</Text>
  </View>;
}
