import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView
} from "react-native";
import colors from "../config/colors";
import ListItem from "../component/ListItem";
import ListItemSeparator from "../component/ListItemSeparator";
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/mosh.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/mosh.jpg")
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../../assets/mosh.jpg")
  }
];
function MessageScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected is", item)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </SafeAreaView>
  );
}

export default MessageScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
