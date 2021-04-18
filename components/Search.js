import React from 'react'
import {SafeAreaView, TextInput, View, Button, Text} from "react-native";
import {styles} from "../styles/stylesheet";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "Paris"
        }
    }

    setCity(city) {
        this.setState({city})
    }

    render() {

        return (
            <View style={styles.view}>
                <Text style={styles.title}>La météo dans votre ville</Text>
                <SafeAreaView>
                    <TextInput
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setCity(text)}
                        style={styles.input}
                        value={this.state.city}
                    />
                    <Button onPress={() => this.submit()} title="Rechercher"/>
                </SafeAreaView>
            </View>

        );
    }

}


