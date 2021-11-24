import React from "react";
import { View, StyleSheet } from "react-native";
import RoundTextInput from "./RoundTextInput";

const Search = () => {
  return (
    <View style={styles.root}>
      <View style={styles.searchContainer}>
        <RoundTextInput placeHolderText="Search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 120,
    width: "100%",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#FFA000",
  },
  searchContainer: {
    top: 14,
    backgroundColor: "#fff",
  },
});

export default Search;
