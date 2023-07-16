import React from 'react';
import { Button, View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export function ScreenHabitAdd() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ScreenHabitAdd</Text>

      <Button title={"Back"} onPress={()=> {
        navigation.goBack();
      }}/>

      <Button title={"Settings"} onPress={()=> {
        //@ts-ignore
        navigation.navigate("ScreenSettings");
      }}/>
    </View>
  );
}
