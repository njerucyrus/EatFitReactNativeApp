import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Color } from "../Theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const foodIcon = (
  <MaterialCommunityIcons name="food" size={32} color={Color.accentColor} />
);
const nextIcon = (
  <MaterialIcons name="navigate-next" size={48} color={Color.whiteColor} />
);

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const mealPlans = [
  {
    id: 1,
    day: "Mon",
    breakfast: "4 boiled eggs and cap of milk",
    breakfast_option_b: "2 beaf sousages, a grass of tea",
    lunch: "Matoke with beaf",
    lunch_option_b: "Rice and Beaf",
    dinner: "Githeri",
    dinner_option_b: "Mukimo",
  },
  {
    id: 2,
    day: "Tue",
    breakfast: "4 boiled eggs and cap of milk",
    breakfast_option_b: "2 beaf sousages, a grass of tea",
    lunch: "Ugali and Beaf",
    lunch_option_b: "Rice and Beaf",
    dinner: "Githeri(Boiled Corn and Beans)",
    dinner_option_b: "Mukimo",
  },
  {
    id: 3,
    day: "Wed",
    breakfast: "4 boiled eggs and cap of milk",
    breakfast_option_b: "2 beaf sousages, a grass of tea",
    lunch: "Ugali and Beaf",
    lunch_option_b: "Rice and Beaf",
    dinner: "Githeri",
    dinner_option_b: "Mukimo",
  },
  {
    id: 4,
    day: "Thu",
    breakfast: "4 boiled eggs and cap of milk",
    breakfast_option_b: "2 beaf sousages, a grass of tea",
    lunch: "Ugali and Beaf",
    lunch_option_b: "Rice and Beaf",
    dinner: "Githeri",
    dinner_option_b: "Mukimo",
  },
  {
    id: 5,
    day: "Fri",
    breakfast: "4 boiled eggs and cap of milk",
    breakfast_option_b: "2 beaf sousages, a grass of tea",
    lunch: "Ugali and Beaf",
    lunch_option_b: "Rice and Beaf",
    dinner: "Githeri",
    dinner_option_b: "Mukimo",
  },
  {
    id: 6,
    day: "Sat",
    breakfast: "4 boiled eggs and cap of milk",
    breakfast_option_b: "2 beaf sousages, a grass of tea",
    lunch: "Ugali and Beaf",
    lunch_option_b: "Rice and Beaf",
    dinner: "Githeri",
    dinner_option_b: "Mukimo",
  },
  {
    id: 7,
    day: "Sun",
    breakfast: "4 boiled eggs and cap of milk",
    breakfast_option_b: "2 beaf sousages, a grass of tea",
    lunch: "Ugali and Beaf",
    lunch_option_b: "Rice and Beaf",
    dinner: "Githeri",
    dinner_option_b: "Mukimo",
  },
];

const Day = ({ item, navigation }) => {
  const mealPlan = mealPlans.filter((plan) => {
    return plan.day === item.substring(0, 3);
  });

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MealPlanDetail", {
          title: `${item}'s Meal Plan`,
          mealPlan,
        })
      }
    >
      <View style={styles.dayContainer}>
        <View style={styles.foodIcon}>{foodIcon}</View>
        <Text style={styles.dayLbl}>{item}</Text>
        <View style={styles.nextIcon}>{nextIcon}</View>
      </View>
    </TouchableOpacity>
  );
};
const DaysList = ({ navigation }) => {
  const renderDay = ({ item }) => {
    return <Day navigation={navigation} item={item} />;
  };
  return (
    <View>
      <FlatList
        data={days}
        renderItem={renderDay}
        keyExtractor={(item, key) => key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    flexDirection: "row",
    height: 80,
    margin: 8,
    backgroundColor: Color.darkPrimaryColor,
    borderRadius: 14,
    justifyContent: "space-between",
  },
  foodIcon: {
    height: 56,
    width: 56,
    borderRadius: 50,
    backgroundColor: Color.whiteColor,
    top: 14,
    justifyContent: "center",
    alignItems: "center",
    start: 20,
  },
  dayLbl: {
    top: 24,

    color: Color.whiteColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  nextIcon: {
    top: 14,
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
});

export default DaysList;
