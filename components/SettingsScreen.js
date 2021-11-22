import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Focusawarestatusbar from "./FocusAwareStatusBar";

export default function SettingsScreen() {
  return (
    <View style={styles.root}>
      <Focusawarestatusbar barStyle="default" />
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
