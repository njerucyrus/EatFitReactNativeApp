import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar, Text } from "react-native";
import Focusawarestatusbar from "./FocusAwareStatusBar";
import Recipedetailscreen from "./RecipeDetail/RecipeDetailScreen";

const Searchscreen = () => {
  return (
    <View style={styles.root}>
      <Focusawarestatusbar barStyle="light-content" />
      <Text>This is search screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default Searchscreen;
