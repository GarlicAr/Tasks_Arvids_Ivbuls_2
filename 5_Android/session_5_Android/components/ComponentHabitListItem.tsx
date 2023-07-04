import React from "react";
import {Button, Text, TextInput, View, Keyboard, Pressable} from "react-native";
import * as events from "events";
interface Props{
    habit: string;
    onDelete?: (habit: string) => void;
    onUpdate?: (habit: string) => void;
}

interface State{
    isEditing: boolean;
    updatedText: string;
}

export class ComponentHabitListItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isEditing: false,
            updatedText: this.props.habit,
        };
    }


    onDelete = () => {
        if(this.props.onDelete){
            this.props.onDelete(this.props.habit);
        }

    };

    onUpdate = () => {
        if (this.props.onUpdate) {
            this.props.onUpdate(this.state.updatedText);
            this.setState({ isEditing: false });
        }
    };

    startEditing = () => {
        this.setState({ isEditing: true });
    };

    endEditing = () => {
        this.setState({ isEditing: false });
    };

    handleTextChange = (text: string) => {
        this.setState({ updatedText: text });
    };


    handleKeyPress = (event: React.KeyboardEvent<TextInput>) => {
        if (event.key === "Enter") {
            this.onUpdate();
        }
    };

    render(){
        const {habit} = this.props;
        const {isEditing, updatedText} = this.state;


        if (isEditing) {
            return (
                <TextInput
                    value={updatedText}
                    onChangeText={this.handleTextChange}
                    onBlur={this.endEditing}
                    onKeyDown={this.handleKeyPress}
                    autoFocus
                />
            );
        }

        return(
        <View>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
                <Text>{this.props.habit}</Text>
                <Pressable style={{
                    backgroundColor:'red',
                    borderWidth: 1,
                    padding: 3,
                    marginLeft: 10,

                }} onPress={this.onDelete}>
                    <Text>DELETE</Text>
                </Pressable>

                <Pressable style={{
                    backgroundColor:'green',
                    borderWidth: 1,
                    padding: 3,
                    marginLeft: 10,

                }}onPress={this.onUpdate} >
                    <Text>UPDATE</Text>
                </Pressable>
            </View>
        </View>)

    }
}