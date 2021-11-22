import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const check = <Feather name="check-square" size={24} color="#FF9800" />;
const bullseye = (
  <MaterialCommunityIcons name="bullseye-arrow" size={24} color="#FF9800" />
);

const Ingridientitem = ({ ingridient }) => {
  return (
    <View style={styles.root}>
      {check}
      <Text style={styles.text}>{ingridient}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginStart: 2,
    padding: 8,
  },
  text: {
    fontSize: 16,
    color: "#212121",
    padding: 8,
  },
});

export default Ingridientitem;
