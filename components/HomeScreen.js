import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import Focusawarestatusbar from "./FocusAwareStatusBar";
import RecipeItem from "./RecipeItem";
import RoundTextInput from "./Search/RoundTextInput";
import Search from "./Search/Search";
import Trends from "./Trends/Trends";
import TrendsItem from "./Trends/TrendsItem";

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
export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <RecipeItem
        imageUrl={item.imageUrl}
        videoUrl={item.videUrl}
        title={item.title}
        subTitle={item.subTitle}
        navigation={navigation}
      />
    );
  };

  return (
    <ScrollView horizontal={false}>
      <View style={styles.root}>
        <Focusawarestatusbar barStyle="default" />
        <Search />
        <Trends />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Hot Recipes</Text>
        </View>
        <View>
          <FlatList
            style={styles.list}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  headerContainer: { marginTop: 2 },
  header: {
    color: "#212121",
    fontSize: 22,
    marginStart: 16,
    fontWeight: "bold",
  },
  list: {
    marginTop: 8,
    marginEnd: 8,
    marginStart: 8,
    padding: 8,
  },
});
