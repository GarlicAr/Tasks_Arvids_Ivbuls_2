import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import DeviceInfo from "react-native-device-info";

interface Props {
  default_email:string;
  onRegisterDone: CallableFunction;

}
interface State {
  username: string;
  email: string;
  password: string;
}
const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    marginBottom: 10,
  }
});
export function ScreenUserRegisterHooks({default_email, onRegisterDone}: Props) {
  const [state, setState] = useState({
    username: ``,
    email: ``,
    password: ``,
  }as State);

  const load = () => {
    DeviceInfo.getDeviceName()
      .then((defaultUsername) => {
        setState({ ...state, username: defaultUsername });
      })
      .catch((error) => {

      });
  };


  useEffect(()=> {
    load();

  }, []);


  const registerUser = () => {
    const { username, email, password } = state;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      console.log('Please fill in all required fields');
      return;
    }

    let newUser = {
      username: username,
      email: email,
      password: password,
    };

    onRegisterDone(newUser);

  }

  return(
    <View style={{
      flex: 1,
      padding: 20,
    }}>
      <TextInput
        placeholder={"Username"}
        onChangeText={text => setState({...state, username: text })}
        style={styles.TextInput}
        value={state.username}
      ></TextInput>

      <TextInput
        placeholder={'Email'}
        textContentType={"emailAddress"}
        onChangeText={text => setState({...state, email: text })}
        style={styles.TextInput}
        value={state.email}
      ></TextInput>

      <TextInput
        placeholder={"Password"}
        secureTextEntry={true}
        onChangeText={text => setState({...state, password: text })}
        style={styles.TextInput}
        value={state.password}
      ></TextInput>

      <Button title={'Register'} onPress={registerUser} />
    </View>
  )

}
