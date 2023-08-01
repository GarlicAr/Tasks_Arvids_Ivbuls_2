import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Icon, Button } from "@rneui/themed";
import { strings } from "../utils/strings";
import { useNavigation, useRoute } from "@react-navigation/native";


export function ScreenHome() {
  let navigation = useNavigation();
  const [ currentLanguage, setCurrentLanguage ] = useState("en");
  const route = useRoute();


  // @ts-ignore
  const allHabits = route.params?.allHabits || [];


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>{strings.home_title}</Text>

      <FlatList
        // @ts-ignore
        data={allHabits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Habit: {item.habit}</Text>
            <Text>Date: {item.date.toDateString()}</Text>
          </View>
        )}
      />

      <Button
        title={strings.button_home_add_habit}
        onPress={() => {
          // @ts-ignore
          navigation.navigate('ScreenHabitAdd');
        }}
      >
        <Icon name = "home" color={"white"}/>
        {strings.button_home_add_habit}
      </Button>

      <Button onPress={()=> {
        strings.setLanguage("lv");
        setCurrentLanguage(strings.getLanguage());
      }}>
        <Text>{strings.switch_to_lv}</Text>
      </Button>

      <Button onPress={()=> {
        strings.setLanguage("en");
        setCurrentLanguage(strings.getLanguage());
      }}>
        <Text>{strings.switch_to_en}</Text>
      </Button>

    </View>
  );
}


