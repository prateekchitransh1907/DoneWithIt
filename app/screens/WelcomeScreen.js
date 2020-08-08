import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import AppButton from "../component/AppButton/Button";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={{
            width: 100,
            height: 100
          }}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => console.log("login has been clicked")}
        />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    width: "90%"
  },
  tagline: {
    fontSize: 22,
    fontWeight: "600",
    paddingVertical: 20
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  }
});

export default WelcomeScreen;
