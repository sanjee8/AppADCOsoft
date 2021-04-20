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

    async save() {

        const jsonValue = await AsyncStorage.getItem('notes')
        const data = jsonValue != null ? JSON.parse(jsonValue) : null

        data[this.props.route.params.index] = this.state.name

        await AsyncStorage.setItem('notes', JSON.stringify(data))

        this.props.navigation.navigate('Home', {reload: true})

    }

    async delete() {

        const jsonValue = await AsyncStorage.getItem('notes')
        const data = jsonValue != null ? JSON.parse(jsonValue) : null

        data.splice(this.props.route.params.index, 1)

        await AsyncStorage.setItem('notes', JSON.stringify(data))

        this.props.navigation.navigate('Home', {reload: true})
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
                        <Button title="Enregistrer" onPress={() => this.save()}/>
                    </View>

                    <View style={todo_page.delete}>
                        <Text>Supprimer la tâche :</Text>
                        <Button title="Supprimer" onPress={() => this.delete()}/>
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
    },
    delete: {
        marginTop: 30,
        marginHorizontal: 5
    }
})