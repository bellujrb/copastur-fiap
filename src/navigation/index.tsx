import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Auth from "../screens/auth/register";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";

export type RootStackParams = {
    welcome: undefined;
    login: undefined;
    register: undefined;
    home: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export default function Screens(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="welcome"
                    component={Welcome}
                    options={{
                        headerShown: false 
                    }}
                />

                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="register"
                    component={Register}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}