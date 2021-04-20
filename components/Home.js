import React, {useState} from 'react';
import {Text, SafeAreaView, FlatList, View, TextInput, Button} from 'react-native';
import {styles} from "../styles/stylesheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Todo from "./Todo";


const Home = ({navigation, route}) => {

    if (typeof (route.params) !== 'undefined' && route.params != null) {
        if (route.params.reload === true) {
            refresh()
        }
    }

     async function refresh() {
         const jsonValue = await AsyncStorage.getItem('notes')
         const data = jsonValue != null ? JSON.parse(jsonValue) : null
         setTodoItems(data || [])
     }

    const [todoItems, setTodoItems] = useState(async () => {
            const jsonValue = await AsyncStorage.getItem('notes')
            const data = jsonValue != null ? JSON.parse(jsonValue) : null
            setTodoItems(data || [])
        }
    );
    const [todo, setTodo] = useState(null)

    async function submit() {

        if (todo === null || todo === "") {
            alert("Vide !")
            return
        }

        if (todoItems.includes(todo)) {
            alert("Existe déjà !")
            return
        }

        const updatedNotes = [todo, ...todoItems]
        setTodoItems(updatedNotes)
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
        this.textInput.clear()


    }

    return (
        <View style={styles.view}>
            <Text style={styles.title}>Ajouter une nouvelle tâche</Text>
            <SafeAreaView>
                <TextInput
                    ref={input => {
                        this.textInput = input
                    }}
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => setTodo(text)}
                    style={styles.input}
                    value={todo}
                />
                <Button onPress={() => submit()} title="Ajouter"/>
            </SafeAreaView>

            <SafeAreaView style={{marginTop: 20}}>
                <Text style={styles.title}>Todo-List</Text>
                <FlatList
                    nestedScrollEnabled
                    data={todoItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <Todo name={item} index={index} navigation={navigation}/>
                        )
                    }}
                />
            </SafeAreaView>
        </View>
    );
};

export default Home;