import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatListItem from "../../components/ChatListItem";

import chats from "../../../assets/data/chats";

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={(item) => {
          return <ChatListItem {...item.item} />;
        }}
      />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 80,
  },
});
