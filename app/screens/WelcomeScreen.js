import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
function WelcomeScreen(props) {
  return (
    <ImageBackground
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
        <Text style={{ fontWeight: "500" }}>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity
          style={{
            alignItems: "center"
          }}
          onPress={() => console.log("hailaa")}
        >
          <Text style={{ fontSize: 22, color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerButton}>
        <TouchableOpacity
          style={{
            alignItems: "center"
          }}
          onPress={() => console.log("hailaa")}
        >
          <Text style={{ fontSize: 22, color: "#fff" }}>Sign Up</Text>
        </TouchableOpacity>
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
