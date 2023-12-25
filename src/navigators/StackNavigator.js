import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceScreen from "../screens/PlaceScreen";
import SearchScreen from "../screens/SearchScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Places" component={PlaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
