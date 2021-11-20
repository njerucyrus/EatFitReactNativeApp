import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import img1 from "../assets/images/img1.jpg";

export default function RecipeItem({ imageUrl, videoUrl, title, subTitle }) {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <View style={styles.recipeContainer}>
          <Image source={img1} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.recipeHeader}>{title}</Text>
            <Text style={styles.recipeSubHeader}>{subTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
  },
  recipeContainer: { flexDirection: "row" },
  image: {
    height: 120,
    width: 120,
    marginStart: 8,
    marginTop: 8,
    borderRadius: 16,
    resizeMode: "cover",
    backgroundColor: "#0000ffff",
  },
  textContainer: {
    padding: 4,
    margin: 4,
    flexDirection: "column",
    height: 120,
  },
  recipeHeader: {
    padding: 4,
    fontSize: 16,
    marginTop: 8,
    fontWeight: "bold",
    flexWrap: "wrap",
    color: "#000",

    width: "80%",
  },
  recipeSubHeader: {
    marginTop: 4,
    padding: 4,
    width: "100%",
  },
});
