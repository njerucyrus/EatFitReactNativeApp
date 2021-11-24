import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import img4 from "../../assets/images/img4.jpg";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const displayStars = (stars) => {
  return (
    <View style={styles.metaDataBox}>
      <AntDesign name="star" size={20} color="#FFC107" />
      <Text style={{ alignItems: "baseline", padding: 2 }}>{stars}</Text>
    </View>
  );
};

const displayTime = (time) => {
  return (
    <View style={styles.metaDataBox}>
      <AntDesign name="clockcircleo" size={20} color="blue" />
      <Text style={{ padding: 4, marginBottom: 8 }}>{time}</Text>
    </View>
  );
};

const displayHardness = (hardness) => {
  return (
    <View style={styles.metaDataBox}>
      <MaterialCommunityIcons name="chef-hat" size={20} color="#FFC107" />
      <Text style={{ padding: 4, marginBottom: 8 }}>{hardness}</Text>
    </View>
  );
};

export default function TrendsItem({ item, navigation }) {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={img4} style={styles.image} />
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxHeader}>Delicious Healthy Kebab</Text>
            <Text style={styles.infoBoxSubHeader}>Quick and easy </Text>
            <View style={styles.divider} />
            <View style={styles.metaDataBox}>
              {displayStars(4.8)}
              {displayTime("25 mins")}
              {displayHardness("easy")}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageContainer: {
    marginTop: 25,
    marginEnd: 16,
    marginBottom: 8,
    padding: 8,
    height: 280,

    width: "75%",
    start: 30,

    position: "relative",
    borderRadius: 8,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 8,
  },

  infoBox: {
    height: 110,
    width: 280,
    flexDirection: "column",
    backgroundColor: "white",
    position: "absolute",
    top: 130,
    start: 14,
    borderRadius: 12,
  },
  infoBoxHeader: {
    color: "#212121",
    fontWeight: "bold",
    fontSize: 16,
    marginStart: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  infoBoxSubHeader: {
    color: "#757575",
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
    marginBottom: 8,
    alignItems: "baseline",
  },
});
