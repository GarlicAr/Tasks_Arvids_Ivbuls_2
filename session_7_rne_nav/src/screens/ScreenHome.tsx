import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { Icon, Button } from "@rneui/themed";
import { strings } from "../utils/strings";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Input } from "react-native-elements";
import axios from "axios";
import md5 from "crypto-js/md5";
const API_TOKEN = "patgLCxXF1ysDmMcr.58369659ef90e3b61132f6e0eea55e266e5e61911dd7bb964b4ee908e9299f0b";

export function ScreenHome() {
  let navigation = useNavigation();

  const route = useRoute();
  const [isLoading, setIsLoading] = useState(false);
  const [ user, setUser ] = useState({
    username: "",
    password: "",
    photo_url: "",
    is_logged: false
  })

  interface Attachment {
    width: number;
    height: number;
    url: string;
  }
  interface User {
    user_id: number;
    username: string;
    password: string;
    photo: Attachment[];
  }


  const onLogout = async () => {

    if(user.is_logged) {
      setUser({
        username: "",
        password: "",
        is_logged: false,
        photo_url: ""
      })
    }


  }

  const onLogin = async () => {
    if (isLoading == false) {
      setIsLoading(true);
      try {
        let response = await axios.get(
          `https://api.airtable.com/v0/appvfE2hD5sjkU1Ta/Tasks`,
          {
            headers: {
              Authorization: "Bearer " + API_TOKEN
            }
          }
        );
        let users: User[] = response.data.records.map(it => it.fields);

        for (let userEach of users) {
          if (userEach.username === user.username) {
            if (userEach.password === md5(user.password).toString()) {
              console.log("Login succesfull!");
              setUser({
                ...user,
                is_logged: true,
                photo_url: userEach.photo[0].url
              });

              break;
            }
          }
        }

        console.log(response.data);

      } catch (e) {
        console.error(e)
      }
      setIsLoading(false);
    }

  }

  // @ts-ignore
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>{strings.home_title}</Text>

      {/*<FlatList*/}
      {/*  // @ts-ignore*/}
      {/*  data={allHabits}*/}
      {/*  keyExtractor={(item, index) => index.toString()}*/}
      {/*  renderItem={({ item }) => (*/}
      {/*    <View style={{ marginBottom: 10 }}>*/}
      {/*      <Text>Habit: {item.habit}</Text>*/}
      {/*      <Text>Date: {item.date.toDateString()}</Text>*/}
      {/*    </View>*/}
      {/*  )}*/}
      {/*/>*/}


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


