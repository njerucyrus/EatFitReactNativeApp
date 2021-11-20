import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import RoundTextInput from "./RoundTextInput";

export default function HomeScreen() {
  return (
    <View>
      <RoundTextInput placeHolderText="Search Here" />
    </View>
  );
}
