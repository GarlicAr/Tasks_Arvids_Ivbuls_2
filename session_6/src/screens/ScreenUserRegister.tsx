import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import DeviceInfo from "react-native-device-info";

interface Props {}
interface State {
  username: string;
  email: string;
  password: string;
}

interface User {
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

export class ScreenUserRegister extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  componentDidMount = async () =>  {
    if(DeviceInfo.getDeviceName){
      let defaultUsername = await DeviceInfo.getDeviceName();
      this.setState({username: defaultUsername})
    }

  }

  registerUser = () => {
    const { username, email, password } = this.state;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      console.log('Please fill in all required fields');
      return;
    }

    let newUser: User = {
      username: username,
      email: email,
      password: password,
    };

    console.log(newUser);
  }

  render = () => {
    return (
      <View style={{
        flex: 1,
        padding: 20,
      }}>
        <TextInput
          placeholder={"Username"}
          onChangeText={text => this.setState({ username: text })}
          style={styles.TextInput}
          value={this.state.username}
        ></TextInput>

        <TextInput
          placeholder={'Email'}
          textContentType={"emailAddress"}
          onChangeText={text => this.setState({ email: text })}
          style={styles.TextInput}
          value={this.state.email}
        ></TextInput>

        <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          style={styles.TextInput}
          value={this.state.password}
        ></TextInput>

        <Button title={'Register'} onPress={this.registerUser} />
      </View>
    )
  }
}
