import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Todo extends React.Component {



    render() {
        console.log(this.props.index)
        return (
            <TouchableOpacity onPress={() => alert("test")} style={todo.view}>
                <Text style={todo.name}>{this.props.name}</Text>
                <Text><Ionicons name="chevron-forward-outline" size={24}/></Text>
            </TouchableOpacity>
        )
    }

}

const todo = StyleSheet.create({
    view: {
        backgroundColor: '#85C1E9',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        flexBasis: 250
    }
})