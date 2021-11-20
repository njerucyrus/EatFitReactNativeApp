import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const AppHeader = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}>This is Header</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    textAlign: "center",
    alignItems: "center",
    marginTop: 32,

    backgroundColor: "darkslateblue",
  },
  text: {
    color: "white",
  },
});

export default AppHeader;
