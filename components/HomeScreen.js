import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import RecipeItem from "./RecipeItem";
import RoundTextInput from "./RoundTextInput";

export default function HomeScreen() {
  return (
    <View>
      <RoundTextInput placeHolderText="Search Here" />
      <RecipeItem />
    </View>
  );
}
