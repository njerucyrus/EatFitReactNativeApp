import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Focusawarestatusbar from "./FocusAwareStatusBar";
import MealPlanDetailScreen from "./MealPlan/MealPlanDetailScreen";

export default function SettingsScreen() {
  return (
    <View style={styles.root}>
      <Focusawarestatusbar barStyle="default" />
      <MealPlanDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    
  },
});
