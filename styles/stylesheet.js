import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 15,
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    view: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    github: {
        color: 'blue',
        margin: 20,
        textAlign: 'center'
    }
});

export {styles}