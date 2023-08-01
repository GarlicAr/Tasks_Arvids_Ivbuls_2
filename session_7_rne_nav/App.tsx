import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenHome }  from './src/screens/ScreenHome';
import { ScreenHabitAdd } from './src/screens/ScreenHabitAdd';
import { ScreenSettings } from './src/screens/ScreenSettings';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ComponentDrawer  from "./src/components/ComponentDrawer";
import 'react-native-gesture-handler';
import { ContextStrings, strings } from "./src/utils/strings";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreenWrapper(){
  const contextStrings = useContext(ContextStrings);

  return (<Drawer.Navigator
  initialRouteName="ScreenHome"
  drawerContent={(props) => <ComponentDrawer {...props} />}
  >

    <Drawer.Screen
      name={"ScreenHome"}
      component={ScreenHome}
      options={{
        title: strings.home_title
      }}
    />

    <Drawer.Screen
      name={"ScreenSettings"}
      component={ScreenSettings}
      options={{
        title: strings.settings_title
      }}
    />

  </Drawer.Navigator>)
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
        title: strings.button_home_add_habit
      }}
    />

    <Stack.Screen
      name={"ScreenSettings"}
      component={ScreenSettings}
      options={{
        title: strings.settings_title
      }}
    />

  </Stack.Navigator> )
}

export function App() {
  return (<NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
