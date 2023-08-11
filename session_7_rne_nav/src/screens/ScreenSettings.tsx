import React, { useState } from "react";
import { Icon, Button, Text } from "@rneui/themed";
import { View } from "react-native";
import { strings } from "../utils/strings";

export function ScreenSettings() {
  const [ currentLanguage, setCurrentLanguage ] = useState("en");


  // @ts-ignore
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ScreenSettings</Text>

      <View style={{
        borderWidth: 1,
        marginVertical: 20
      }}>
        <Text>Languages</Text>
        <Button onPress={()=> {
          strings.setLanguage("lv");
          setCurrentLanguage(strings.getLanguage());
        }} title={""}>
          <Text>{strings.switch_to_lv}</Text>
        </Button>

        <Button onPress={()=> {
          strings.setLanguage("en");
          setCurrentLanguage(strings.getLanguage());
        }} title={""}>
          <Text>{strings.switch_to_en}</Text>
        </Button>

      </View>

    </View>


  );
}
