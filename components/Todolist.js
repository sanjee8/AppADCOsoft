import React from 'react'
import {View, Button, Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Result from "./Result";


const TodoStack = createStackNavigator();

export default class Todolist extends React.Component {

    render() {


        return (

                <TodoStack.Navigator>
                    <TodoStack.Screen name="Home" component={Home} options={{title: "Vos tâches"}}/>
                    <TodoStack.Screen name="Result" component={Result} options={{title: "Modifier une tâche"}}/>
                </TodoStack.Navigator>


            )

    }

}