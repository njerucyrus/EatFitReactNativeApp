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
    height: 38,
    width: "80%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 16,
    marginTop: 42,
    color: "black",
    backgroundColor: "white",
    padding: 8,
  },
});
