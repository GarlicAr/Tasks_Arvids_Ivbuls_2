import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { Icon, Button } from "@rneui/themed";
import { strings } from "../utils/strings";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Input } from "react-native-elements";
import axios from "axios";
import md5 from "crypto-js/md5";
import { isLoading, onLogin, onLogout, setUser, user } from "../controllers/LoginController";

export function ScreenHome() {

  // @ts-ignore
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>{strings.home_title}</Text>

      {user.is_logged ? (
        <View style={{
          borderWidth: 1,
          marginVertical: 20,
          padding: 10
        }}>

          <Text>{user.username} is logged!</Text>
          {user.photo_url && <Image source={{ uri: user.photo_url }} style={{ width: 100, height: 100 }} />}

          <Button onPress={onLogout}>Log out</Button>

        </View>
      ) : (
        <View style={{
          borderWidth: 1,
          marginVertical: 20,
          padding: 10
        }}>
          <Text>user login</Text>

          <Input
            placeholder={'username'}
            containerStyle={{width: 200}}
            value={user.username}
            onChangeText={text => setUser({...user, username: text})}
          />

          <Input
            placeholder={'password'}
            containerStyle={{width: 200}}
            value={user.password}
            textContentType={"password"}
            secureTextEntry={true}
            onChangeText={text => setUser({...user, password: text})}
          />

          <Button onPress={onLogin}>
            {isLoading ? (
              <ActivityIndicator size="small" style={{ padding: 10 }} />
            ) : (
              <Text style={{ fontSize: 25 }}>Login</Text>
            )}
          </Button>
        </View>
      )}



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



    </View>
  );

}


