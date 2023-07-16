import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenHome }  from './src/screens/ScreenHome';
import { ScreenHabitAdd } from './src/screens/ScreenHabitAdd';
import { ScreenSettings } from './src/screens/ScreenSettings';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ComponentDrawer  from "./src/components/ComponentDrawer";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreenWrapper(){
  return <Drawer.Navigator
  initialRouteName="ScreenHome"
  drawerContent={(props) => <ComponentDrawer {...props} />}
  >

    <Drawer.Screen
      name={"ScreenHome"}
      component={ScreenHome}
      options={{
        title: "Habits"
      }}
    />

    <Drawer.Screen
      name={"ScreenSettings"}
      component={ScreenSettings}
      options={{
        title: "Settings"
      }}
    />

  </Drawer.Navigator>
}

function AppStack () {
  return (<Stack.Navigator
  initialRouteName="HomeScreenWrapper"
  >

    <Stack.Screen
      name={"HomeScreenWrapper"}
      component={HomeScreenWrapper}
      options={{
        headerShown: false
      }}
    />

    <Stack.Screen
      name={"ScreenHabitAdd"}
      component={ScreenHabitAdd}
      options={{
        title: "Add new habit"
      }}
    />

    <Stack.Screen
      name={"ScreenSettings"}
      component={ScreenSettings}
      options={{
        title: "Settings"
      }}
    />

  </Stack.Navigator> )
}

export default function App() {
  return (<NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
