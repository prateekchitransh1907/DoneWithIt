import React from "react";
import { Image, StyleSheet, View } from "react-native";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
export default ViewImageScreen;
