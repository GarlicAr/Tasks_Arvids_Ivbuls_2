import axios from "axios";
import { User } from "../models/interfaces/iUserInterface";
import md5 from "crypto-js/md5";
import { API_TOKEN } from "../constants/constants";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


export let navigation = useNavigation();

export const route = useRoute();
export const [isLoading, setIsLoading] = useState(false);
export const [ user, setUser ] = useState({
  username: "",
  password: "",
  photo_url: "",
  is_logged: false
})



export const onLogout = async () => {

  if(user.is_logged) {
    setUser({
      username: "",
      password: "",
      is_logged: false,
      photo_url: ""
    })
  }

}

export const onLogin = async () => {
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
