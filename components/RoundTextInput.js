import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function RoundTextInput({ placeHolderText }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeHolderText} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  input: {
    height: 32,
    width: "80%",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 16,
    color: "black",
    padding: 8,
  },
});
