import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import RecipeItem from "./RecipeItem";
import RoundTextInput from "./RoundTextInput";
import Trends from "./Trends/Trends";

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
export default function HomeScreen() {
  const renderItem = ({ item }) => {
    return (
      <RecipeItem
        imageUrl={item.imageUrl}
        videoUrl={item.videUrl}
        title={item.title}
        subTitle={item.subTitle}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <RoundTextInput placeHolderText="Search Here" />
      <Trends />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 400,
    marginEnd: 8,
    marginStart: 8,
    padding: 8,
  },
});
