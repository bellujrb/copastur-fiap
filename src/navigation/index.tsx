import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import Home from "../screens/home";
import Info from "../screens/infos/info1";
import InfoTwo from "../screens/infos/info2";

export type RootStackParams = {
    welcome: undefined;
    login: undefined;
    register: undefined;
    home: undefined;
    info1: undefined;
    info2: undefined
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

                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="info1"
                    component={Info}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="info2"
                    component={InfoTwo}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}