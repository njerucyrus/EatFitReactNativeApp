import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native";
import BottomNav from "./components/BottomNav";

const App = () => {
  return (
    <NavigationContainer>
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
