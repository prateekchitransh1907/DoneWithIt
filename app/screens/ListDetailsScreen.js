import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import AppText from "./../component/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../component/ListItem";

function ListDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/jacket.jpg")} />
      <View style={styles.defaultContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.listItemView}>
          <ListItem
            onPress={() => console.log("message selected", item)}
            image={require("../../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

export default ListDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black"
  },
  price: {
    color: colors.secondary
  },
  defaultContainer: {
    padding: 20
  },
  listItemView: {
    marginVertical: 50
  }
});
