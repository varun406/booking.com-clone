import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceScreen from "../screens/PlaceScreen";
import SearchScreen from "../screens/SearchScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MapScreen from "../screens/MapScreen";
import PropertyInfoScreen from "../screens/PropertyInfoScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Places" component={PlaceScreen} />
        <Stack.Screen name="Maps" component={MapScreen} />
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
