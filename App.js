import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomNav />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
