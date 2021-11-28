import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recipedetailscreen from "./components/RecipeDetail/RecipeDetailScreen";
import HomeScreen from "./components/HomeScreen";
import MealPlanScreen from "./components/MealPlan/MealPlanScreen";
import MealPlanDetailScreen from "./components/MealPlan/MealPlanDetailScreen";

const Stack = createNativeStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetailScreen"
        component={Recipedetailscreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};
const MealPlanNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MealPlanScreen"
        component={MealPlanScreen}
        options={{ title: "Weekly Meal Plans" }}
      />
      <Stack.Screen
        name="MealPlanDetail"
        component={MealPlanDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};
module.exports = {
  HomeScreenNavigator,
  MealPlanNavigator,
};
