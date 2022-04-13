import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailsMV from "./viewmodel/DetailsMV";
import HomeMV from "./viewmodel/HomeMV";
import Details from "./view/Details";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeMV}
          options={{
            title: "All tablets",
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsMV}
          options={{
            title: "Specifications",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
