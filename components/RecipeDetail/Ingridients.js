import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Ingridientitem from "./IngridientItem";

const Ingridients = ({ ingridients }) => {
  const renderItem = ({ item }) => {
    return <Ingridientitem ingridient={item} />;
  };
  return (
    <View>
      <FlatList
        data={ingridients}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ingridients;
