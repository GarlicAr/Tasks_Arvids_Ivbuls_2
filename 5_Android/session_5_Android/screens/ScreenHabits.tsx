import React from "react";
import {Button, Text, TextInput, View, Keyboard, Pressable} from "react-native";
import {ComponentHabitListItem} from "../components/ComponentHabitListItem";
import {Habit} from "../models/Habit";

interface Props{
    title?: String;
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
        let habits: Habit[];
        habits = this.state.habits;

        if (this.state.currentHabit != ""){
            habits.push(this.state.currentHabit);
        }
        else alert("Please insert a habit!");


        this.setState({
            habits: habits,
            currentHabit: ""

        })

        Keyboard.dismiss();
    }


    onDeleteHabit = (habit: string) =>{

        let habits = this.state.habits;
        let idx = habits.indexOf(habit);

        habits.splice(idx);

        this.setState({
            habits: habits
        });
    }

    onUpdateHabit = (habit: string, updatedHabit: string) => {
        let habits = [...this.state.habits];
        let idx = habits.indexOf(habit);

        if (idx !== -1) {
            habits[idx] = updatedHabit;
            this.setState({
                habits: habits,
            });
        }
    };




    render = () => {
        return (
            <View style={{ flex: 1, marginBottom: 20 }}>
                {this.state.habits.map((habit, i) => (
                    <ComponentHabitListItem
                        key={`habit: ${i}`}
                        habit={habit}
                        onDelete={this.onDeleteHabit}
                        onUpdate={this.onUpdateHabit}
                    />
                ))}

                <View style={{ flex: 1 }}></View>

                <TextInput
                    value={this.state.currentHabit}
                    style={{
                        borderWidth: 1,
                        marginBottom: 10
                    }}
                    onChangeText={(newValue) =>
                        this.setState({
                            currentHabit: newValue
                        })
                    }
                ></TextInput>

                <Button title={"Add habit"} onPress={this.onAddHabit}></Button>
            </View>
        );
    };
}
