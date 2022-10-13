import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//pantallas
import CuentasScreen from "./screens/CuentasScreen";
import App from "./App";


const HomeCuentasStackNavigator = createNativeStackNavigator();

function MyStack(){
    return(
        <HomeCuentasStackNavigator.Navigator initialRouteName="HomeScreen">
            
            <HomeCuentasStackNavigator.Screen
            name="HomeScreen"
            component={App}>
            </HomeCuentasStackNavigator.Screen>
            <HomeCuentasStackNavigator.Screen
            name="Cuentas"
            component={CuentasScreen}></HomeCuentasStackNavigator.Screen>
        </HomeCuentasStackNavigator.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer><MyStack/></NavigationContainer>
    );
}
