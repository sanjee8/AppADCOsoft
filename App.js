import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from "./components/About";
import Todolist from "./components/Todolist";
import {View,  StatusBar} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <View style={{flex:1}}>
            <StatusBar hidden={true}/>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Todolist') {
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                            } else if (route.name === 'About') {
                                iconName = focused
                                    ? 'ios-list'
                                    : 'ios-list';
                            }


                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#007371',
                        inactiveTintColor: 'gray',
                    }}

                >
                    <Tab.Screen name="Todolist" component={Todolist} options={{title: "Accueil"}} />
                    <Tab.Screen name="About" component={About} options={{title: "A propos"}}/>
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}