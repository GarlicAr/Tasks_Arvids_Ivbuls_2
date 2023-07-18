import React from "react";
import {Button, Text, TextInput, View, Keyboard, Pressable} from "react-native";
import {ComponentHabitListItem} from "../components/ComponentHabitListItem";
import {Habit} from "../models/Habit";

interface Props{
    title?: string;
}

interface State{
    habits: Habit[],
    currentHabit: string

}

export class ScreenHabits extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            habits:[
                {
                    title: 'Read a book!',
                },
                {
                    title: 'Read a comic!'
                }
            ],
            currentHabit: ''
            }
        };
    }

onAddHabit = () => {


        if (this.state.currentHabit !== "") {
            const newHabit: Habit = {
                title: this.state.currentHabit,
            };

            this.setState((prevState: State) => ({
                habits: [...prevState.habits, newHabit],
                currentHabit: "",
            }));

            Keyboard.dismiss();
        } else {
            alert("Please insert a habit!");
        }



};


onDeleteHabit = (habit: Habit) => {

    this.setState((prevState: State) => ({
        habits: prevState.habits.filter((h) => h !== habit),
    }));
};

onUpdateHabit = (habitToUpdate: Habit, updatedHabitTitle: string) => {
    const updatedHabits: Habit[] = this.state.habits.map((habit: Habit) =>
        habit === habitToUpdate ? { ...habit, title: updatedHabitTitle } : habit
    );

    this.setState({
        habits: updatedHabits,
    });
};





render = () => {
    return (
        <View style={{ flex: 1, marginBottom: 20 }}>
            {this.state.habits.map((habit: Habit, i: number) => (
                <ComponentHabitListItem
                    key={`habit: ${i}`}
                    habit={habit.title}
                    onDelete={() => this.onDeleteHabit(habit)}
                    onUpdate={(updatedHabit: string) =>
                        this.onUpdateHabit(habit, updatedHabit)
                    }
                />
            ))}

            <View style={{ flex: 1 }}></View>

            <TextInput
                value={this.state.currentHabit}
                style={{
                    borderWidth: 1,
                    marginBottom: 10,
                }}
                onChangeText={(newValue) =>
                    this.setState({
                        currentHabit: newValue,
                    })
                }
            ></TextInput>

            <Button title={"Add habit"} onPress={this.onAddHabit}></Button>
        </View>
    );
};

