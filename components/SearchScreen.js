import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Focusawarestatusbar from "./FocusAwareStatusBar";
import Recipedetailscreen from "./RecipeDetail/RecipeDetailScreen";

const Searchscreen = () => {
  return (
    <View style={styles.root}>
      <Focusawarestatusbar barStyle="light-content" />
      <Recipedetailscreen />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default Searchscreen;
