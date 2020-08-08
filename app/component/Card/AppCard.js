import React, { Component } from "react";
import { View, Image } from "react-native";
import AppText from "../AppText/AppText";
import { styles } from "./style";
function AppCard({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={require(image)} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

export default AppCard;
