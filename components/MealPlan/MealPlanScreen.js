import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Focusawarestatusbar from "../FocusAwareStatusBar";
import { Color } from "../Theme";
import DaysList from "./DaysList";
export default function MealPlanScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Focusawarestatusbar barStyle="dark-content" />
      <View style={styles.listWrapper}>
        <DaysList navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  listWrapper: {
    backgroundColor: Color.whiteColor,
  },
});
