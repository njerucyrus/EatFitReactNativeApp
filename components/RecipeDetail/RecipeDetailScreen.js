import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import img4 from "../../assets/images/img4.jpg";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ingridients from "./Ingridients";
import Focusawarestatusbar from "../FocusAwareStatusBar";

const ingridientList = [
  "1/4 olive oil",
  "3 cloves garlic minced",
  "1 skinless boneless chicken breast halves",
  "2(4x6-inch) focaccia bread",
];
const displayStars = (stars) => {
  return (
    <View style={styles.metaDataBox}>
      <AntDesign name="star" size={20} color="#FFC107" />
      <Text style={{ padding: 3, marginBottom: 8 }}>{stars}</Text>
    </View>
  );
};

const displayTime = (time) => {
  return (
    <View style={styles.metaDataBox}>
      <AntDesign name="clockcircleo" size={20} color="blue" />
      <Text style={{ padding: 3, marginBottom: 8 }}>{time}</Text>
    </View>
  );
};

const displayHardness = (hardness) => {
  return (
    <View style={styles.metaDataBox}>
      <MaterialCommunityIcons name="chef-hat" size={20} color="#FFC107" />
      <Text style={{ padding: 3, marginBottom: 8 }}>{hardness}</Text>
    </View>
  );
};

const Recipedetailscreen = () => {
  return (
    <View style={styles.root}>
      <Focusawarestatusbar barStyle="default" />
      <View style={styles.imageContainer}>
        <Image source={img4} style={styles.image} />

        <View style={styles.infoBox}>
          <View style={styles.metaContainer}>
            <Text style={styles.infoBoxHeader}>Delicious Healty Kebab</Text>
            <Text style={styles.infoBoxSubHeader}>Quick and easy </Text>
          </View>

          <View style={styles.metaDataBox}>
            {displayStars(4.8)}
            {displayTime("25 mins")}
            {displayHardness("easy")}
          </View>
        </View>

        <View style={styles.ingrindientContainer}>
          <Text style={styles.ingindientsTitle}>Ingridients</Text>
          <Ingridients ingridients={ingridientList} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageContainer: {
    height: 240,
    width: "100%",
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },

  infoBox: {
    height: 120,
    width: "88%",
    flexDirection: "column",
    backgroundColor: "white",
    position: "absolute",
    top: 156,
    start: 24,
    borderRadius: 12,
  },
  metaContainer: {
    backgroundColor: "#FFC107",
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    height: "70%",
  },
  infoBoxHeader: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginStart: 16,
    marginTop: 16,
    marginBottom: 8,
  },

  infoBoxSubHeader: {
    color: "#FFFFFF",
    marginStart: 16,
    fontSize: 12,
    marginBottom: 4,
  },
  divider: {
    width: "88%",
    height: 1,
    marginTop: 8,
    left: 16,

    backgroundColor: "#BDBDBD",
  },
  metaDataBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginStart: 8,
    marginTop: 4,
    marginEnd: 8,
  },
  ingrindientContainer: {
    flexDirection: "column",
    margin: 20,
    top: 40,
  },
  ingindientsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
  },
});

export default Recipedetailscreen;
