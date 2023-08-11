import React, { useState } from 'react';
import { Button, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { strings } from "../utils/strings";
import DatePicker from '@react-native-community/datetimepicker';
import { Icon, ListItem } from "@rneui/themed";



export function ScreenHabitAdd() {
  const navigation = useNavigation();
  const [habit, setHabit] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [allHabits, setAllHabits] = useState([]);



  const handleSaveHabit = () => {

    const newHabit = { habit, date };
    console.log('Habit and date saved:', newHabit);
    setAllHabits(prevHabits => [...prevHabits, newHabit]);
    // @ts-ignore
    //navigation.navigate('ScreenHome', { allHabits });

  };

  const handleDateChange = (event, selectedDate) => {

    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);

  };

  const handleDeleteHabit = (habit) => {
    const updatedHabits = allHabits.filter((item) => item !== habit);
    setAllHabits(updatedHabits);
  };





  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ScreenHabitAdd</Text>

      <ListItem.Swipeable

        rightContent={(reset) => (
          <Button
            title="Delete"
            onPress={handleDeleteHabit}
            // @ts-ignore
            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          />
        )}
      >

        <ListItem.Content
          // @ts-ignore
        data = { allHabits }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (

          <View style={{ marginBottom: 10 }}>
            <Icon name="My Icon" />
            <Text>Habit: {item.habit}</Text>
            <Text>Date: {item.date.toDateString()}</Text>
          </View>

        )}
        >


        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>

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

      <TextInput
        value={habit}
        onChangeText={setHabit}
        placeholder="Enter Habit"
        style={{ borderColor: 'gray', borderWidth: 1, padding: 8, marginBottom: 10 }}
      />

      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DatePicker value={date} mode="date" onChange={handleDateChange} />
      )}

      <Button title="Save Habit" onPress={handleSaveHabit} />



      <Button title={strings.back_button} onPress={()=> {
        navigation.goBack();
      }}/>

      <Button title={strings.settings_title} onPress={()=> {
        //@ts-ignore
        navigation.navigate("ScreenSettings");
      }}/>

    </View>
  );
}
