import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import TrendsItem from "./TrendsItem";
import { MaterialIcons } from "@expo/vector-icons";

const data = [
  {
    id: 0,
    imageUrl: "",
    videUrl: "",
    title: "California Grilled Veggie Sandwitch",
    subTitle: "For a smoky and sumptuous veggi-filled",
  },
  {
    id: 1,
    imageUrl: "",
    videUrl: "",
    title: "California Grilled Veggie Sandwitch",
    subTitle: "For a smoky and sumptuous veggi-filled",
  },
  {
    id: 2,
    imageUrl: "",
    videUrl: "",
    title: "California Grilled Veggie Sandwitch",
    subTitle: "For a smoky and sumptuous veggi-filled",
  },
  {
    id: 3,
    imageUrl: "",
    videUrl: "",
    title: "California Grilled Veggie Sandwitch",
    subTitle: "For a smoky and sumptuous veggi-filled",
  },
  {
    id: 4,
    imageUrl: "",
    videUrl: "",
    title: "California Grilled Veggie Sandwitch",
    subTitle: "For a smoky and sumptuous veggi-filled",
  },
  {
    id: 5,
    imageUrl: "",
    videUrl: "",
    title: "California Grilled Veggie Sandwitch",
    subTitle: "For a smoky and sumptuous veggi-filled",
  },
];
const Trends = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <TrendsItem item={item} navigation={navigation} />;
  };
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
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  listContainer: {
    width: "100%",
    height: "auto",
  },
});

export default Trends;
