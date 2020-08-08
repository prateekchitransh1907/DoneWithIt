import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import colors from "../../config/colors";
function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
