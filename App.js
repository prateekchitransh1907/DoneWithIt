import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableHighlight,
  Dimensions
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/component/AppButton/Button";
import ListDetailsScreen from "./app/screens/ListDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
export default function App() {
  console.log("app executed");
  console.log(Dimensions.get("screen"));
  console.log(useDimensions()); // use to take dimensions regardless of orientation
  //let x; //x is undefined
  //x.toString(); // pause on exception in debugger menu to see where the error is.
  // const { landscape } = useDeviceOrientation();

  return (
    // <View style={styles.container}>
    //   <AppButton title="Login" onPress={() => console.log("tapped login")} />
    // </View>
    <MessageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // aligns items in y-axis or secondary axis
    justifyContent: "center" // align items in x-axis or primary axis
  },
  text: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold"
  }
});
