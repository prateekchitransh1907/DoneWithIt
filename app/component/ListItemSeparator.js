import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}
export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f8f4f4"
  }
});
