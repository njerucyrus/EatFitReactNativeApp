import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TrendsItem from "./TrendsItem";
import { MaterialIcons } from "@expo/vector-icons";

const Trends = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.lblTrends}>Trends</Text>
        <TouchableOpacity>
          <View style={styles.viewAllContainer}>
            <Text style={styles.lblViewAll}>View All</Text>
            <MaterialIcons name="navigate-next" size={24} color="#FFA000" />
          </View>
        </TouchableOpacity>
      </View>
      <TrendsItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  lblTrends: {
    marginTop: 16,
    marginStart: 24,
    fontSize: 22,
    color: "#212121",
    fontWeight: "bold",
  },
  viewAllContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    height: 22,
    marginEnd: 32,
  },
  lblViewAll: {
    color: "#FFA000",
    marginTop: 2,
    fontSize: 18,
  },
});

export default Trends;
