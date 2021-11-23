import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import SearchScreen from "./SearchScreen";
import MealPlanScreen from "./MealPlanScreen";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import HomeScreenNavigator from "../CustomNavigation";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        component={HomeScreenNavigator}
        name="HomeScreenNavigator"
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="home" size={25} color={color} />
            ) : (
              <Ionicons name="home-outline" size={25} color={color} />
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        component={SearchScreen}
        name="SearchScreen"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <AntDesign name="search1" size={25} color={color} />
            ) : (
              <AntDesign name="search1" size={25} color={color} />
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        component={MealPlanScreen}
        name="MealPlanScreen"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Entypo name="calendar" size={25} color={color} />
            ) : (
              <Entypo name="calendar" size={25} color={color} />
            ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        component={ProfileScreen}
        name="ProfileScreen"
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
      ></Tab.Screen>
      <Tab.Screen
        component={SettingsScreen}
        name="SettingsScreen"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) =>
            focused ? (
              <Ionicons name="cog" size={25} color={color} />
            ) : (
              <Ionicons name="cog" size={25} color={color} />
            ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
