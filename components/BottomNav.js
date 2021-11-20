import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SearchScreen from "./SearchScreen";
import HomeScreen from "./HomeScreen";
import MealPlanScreen from "./MealPlanScreen";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="EatFit Recipes"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
        }}
        component={HomeScreen}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <AntDesign name="search1" size={size} color={color} />
            ) : (
              <AntDesign name="search1" size={size} color={color} />
            ),
        }}
        component={SearchScreen}
      ></Tab.Screen>

      <Tab.Screen
        name="Meal Plans"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Entypo name="calendar" size={size} color={color} />
            ) : (
              <Entypo name="calendar" size={size} color={color} />
            ),
        }}
        component={MealPlanScreen}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons name="ios-person-circle" size={size} color={color} />
            ) : (
              <Ionicons
                name="ios-person-circle-outline"
                size={size}
                color={color}
              />
            ),
        }}
        component={ProfileScreen}
      ></Tab.Screen>

      <Tab.Screen
        name="Settings"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons name="cog" size={size} color={color} />
            ) : (
              <Ionicons name="cog" size={24} color={color} />
            ),
        }}
        component={SettingsScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
