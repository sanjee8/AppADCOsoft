import React from 'react'
import { Text, TextInput, View, Button, ActivityIndicator, StyleSheet } from 'react-native'
import { styles } from "../styles/stylesheet";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class Result extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            name: null
        }

        this.getTodo()
    }

    async getTodo() {

        const jsonValue = await AsyncStorage.getItem('notes')
        const data = jsonValue != null ? JSON.parse(jsonValue) : null

        this.setState({name: data[this.props.route.params.index]})

        console.log(this.state.name)
    }

    setTodo(text) {
        this.setState({name: text})
    }

    save() {



    }

    render() {
        if(this.state.name === null) {
            return(
                <View style={{margin: 50}}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            )
        } else {
            return (
                <View style={todo_page.page}>
                    <Text style={todo_page.todo}>{this.state.name}</Text>


                    <View style={todo_page.edit}>
                        <Text>Modifier la tâche :</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            onChangeText={(text) => this.setTodo(text)}
                            style={styles.input}
                            value={this.state.name}
                        />
                        <Button style={todo_page.edit_btn} title="Enregistrer" onPress={() => {this.props.navigation.navigate('Home')}}/>
                    </View>
                </View>

            )
        }

    }

}

const todo_page = StyleSheet.create({
    page: {
        margin: 10
    },
    todo: {
        padding: 15,
        backgroundColor: '#85C1E9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        marginBottom: 30
    },
    edit: {
        marginHorizontal: 5
    }
})