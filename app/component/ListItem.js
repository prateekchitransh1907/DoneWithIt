import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight
} from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";
function ListItem({ title, subTitle, image, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.primary} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title: {
    fontWeight: "bold"
  },
  subTitle: {
    color: "grey"
  }
});
