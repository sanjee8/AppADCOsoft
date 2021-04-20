import React from 'react'
import { Text } from 'react-native'
import { styles } from "../styles/stylesheet";

export default class Result extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            city: this.props.route.params.city,
            report: null
        }
    }

    render() {
        return (
            <Text>Salut !</Text>
        )
    }

}