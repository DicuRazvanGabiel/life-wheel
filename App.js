import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import QuestionsScreen from "./screens/QuestionsScreen";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
    const Stack = createStackNavigator();

    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="none"
                    initialRouteName="QuestionsScreen"
                >
                    <Stack.Screen
                        name="ResultScreen"
                        component={ResultScreen}
                    />
                    <Stack.Screen
                        name="QuestionsScreen"
                        component={QuestionsScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
