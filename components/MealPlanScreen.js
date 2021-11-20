import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MealPlanScreen() {
  return (
    <View style={styles.root}>
      <Text>My meal plans</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
