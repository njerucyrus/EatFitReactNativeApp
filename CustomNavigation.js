import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Recipedetailscreen from "./components/RecipeDetail/RecipeDetailScreen";
import HomeScreen from "./components/HomeScreen";

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

export default HomeScreenNavigator;
