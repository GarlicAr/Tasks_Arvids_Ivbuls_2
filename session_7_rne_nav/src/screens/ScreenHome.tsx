import React from 'react';
import { Button, View, Text } from 'react-native';

export function ScreenHome({ navigation }, props) { // Updated the destructuring of props
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ScreenHome</Text>
      <Button
        title={props.buttonTitleAddHabit}
        onPress={() => {
          navigation.navigate('ScreenHabitAdd');
        }}
      />
    </View>
  );
}


