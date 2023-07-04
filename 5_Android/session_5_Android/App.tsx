import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ScreenHabits} from "./screens/ScreenHabits";

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="light" hidden={false}/>
        <ScreenHabits />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
