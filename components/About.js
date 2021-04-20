import React from 'react'

import {View, Text, Button, Linking} from 'react-native'
import {styles} from "../styles/stylesheet";
import Home from "./Home";

export default class About extends React.Component {

    accueil() {
        this.props.navigation.navigate("Home")
    }

    render() {

        return (
            <View style={styles.view}>
                <Text style={styles.title}>A propos de cette Application</Text>
                <Text>
                    Bienvenue sur l'application test développé par Ramsanjeevan RAMMOHAN. Cette application
                    a été développé pour participer à la sélection du stagiaire chez ADCOsoft.

                    {`\n`}{`\n`}

                    En espérant pouvoir répondre à vos attentes et continuer de développer mes compétences chez vous !

                    {`\n`}{`\n`}

                    Si vous souhaitez, vous pouvez accéder à ma page Github pour voir quelques autres de mes projets.

                    {`\n`}{`\n`}
                    Vous y trouvez un projet web (php, html, css, sql, bootstrap, composer), un projet java
                    ( jeu 2d mmorpg ) et un jeu en python ( jeu threes, se rapprochant du 2048 ).
                </Text>

                <Text style={styles.github}
                      onPress={() => Linking.openURL('https://github.com/sanjee8')}>
                    https://github.com/sanjee8
                </Text>

                <Button title="Retourner à l'accueil" onPress={() => this.accueil()}/>
            </View>
        )

    }

}
