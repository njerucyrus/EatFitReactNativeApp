import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Focusawarestatusbar from "./FocusAwareStatusBar";
const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <Focusawarestatusbar barStyle="default" />
      <Text>Profile.</Text>
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

export default ProfileScreen;
