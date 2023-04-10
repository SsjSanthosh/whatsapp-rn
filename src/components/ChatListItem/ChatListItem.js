import dayjs from "dayjs";
import { Text, View, Image, StyleSheet } from "react-native";

// for user-friendly time stamps
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


const ChatListItem = ({ id, user, lastMessage }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {user.name}
          </Text>
          <Text style={styles.time}>
            {dayjs(lastMessage.createdAt).from()}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textMessage} numberOfLines={2}>
            {lastMessage.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    height: 80,
    alignItems: "flex-start",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
  },
  time: {
    fontWeight: 300,
    color: "#aaa",
  },
  textContainer: {
    marginTop: 5,
  },
  textMessage: {
    color: "#000",
    marginRight: 20,
  },
});

export default ChatListItem;
