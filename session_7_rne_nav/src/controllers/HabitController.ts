import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const navigation = useNavigation();
export const [habit, setHabit] = useState('');
export const [date, setDate] = useState(new Date());
export const [showDatePicker, setShowDatePicker] = useState(false);
export const [allHabits, setAllHabits] = useState([]);

export const handleSaveHabit = () => {

  const newHabit = { habit, date };
  console.log('Habit and date saved:', newHabit);
  setAllHabits(prevHabits => [...prevHabits, newHabit]);


};

export const handleDateChange = (event, selectedDate) => {

  const currentDate = selectedDate || date;
  setShowDatePicker(false);
  setDate(currentDate);

};

export const handleDeleteHabit = (habit) => {
  const updatedHabits = allHabits.filter((item) => item !== habit);
  setAllHabits(updatedHabits);
};


