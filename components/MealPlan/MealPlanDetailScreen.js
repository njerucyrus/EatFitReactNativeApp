import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Color } from "../Theme";
import { MaterialIcons } from "@expo/vector-icons";

import bg from "../../assets/images/bg.png";

const breakFastIcon = (
  <MaterialIcons name="free-breakfast" size={32} color={Color.accentColor} />
);
const lunchIcon = (
  <MaterialIcons name="fastfood" size={32} color={Color.accentColor} />
);
const dinnerIcon = (
  <MaterialIcons name="food-bank" size={32} color={Color.accentColor} />
);
const MealItemView = ({ category, optionA, optionB, icon }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <View>
            <Text style={styles.header}>{category}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.icon}>{icon}</View>
            <View style={styles.optionView}>
              <Text style={styles.optionA}>Option A. {optionA}</Text>
              <View style={styles.divider} />
              <Text style={styles.optionB}>Option B. {optionB}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const MealPlanDetailScreen = ({ route }) => {
  const mealPlan = route.params.mealPlan[0];

  return (
    <ImageBackground style={styles.bg} source={bg}>
      <ScrollView style={styles.scrollView}>
        <MealItemView
          category={"BREAKFAST"}
          optionA={mealPlan.breakfast}
          optionB={mealPlan.breakfast_option_b}
          icon={breakFastIcon}
        />
        <MealItemView
          category={"LUNCH"}
          optionA={mealPlan.lunch}
          optionB={mealPlan.lunch_option_b}
          icon={lunchIcon}
        />
        <MealItemView
          category={"DINNER"}
          optionA={mealPlan.dinner}
          optionB={mealPlan.dinner_option_b}
          icon={dinnerIcon}
        />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    opacity: 1,
  },
  scrollView: {
    top: 60,
  },
  bg: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  itemContainer: {
    opacity: 0.9,

    height: 120,
    margin: 8,
    borderRadius: 8,
    backgroundColor: Color.whiteColor,
    shadowColor: Color.primaryTextColor,
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },
  header: {
    margin: 8,
    start: 8,
    color: Color.secondaryTextColor,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionA: {
    alignSelf: "flex-start",
    padding: 8,
    fontSize: 16,
    color: Color.accentColor,
  },
  divider: {
    height: 0.5,
    width: "100%",

    backgroundColor: Color.dividerColor,
  },
  optionB: {
    padding: 8,
    fontSize: 12,
    color: Color.textPrimaryColor,
    fontStyle: "italic",
  },
  icon: {
    top: 8,
    start: 16,
  },
});

export default MealPlanDetailScreen;
