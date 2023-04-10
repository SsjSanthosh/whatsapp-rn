import { Text, View, Image, StyleSheet } from "react-native";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://pps.whatsapp.net/v/t61.24694-24/306533034_796039731655399_7079087133770630928_n.jpg?ccb=11-4&oh=01_AdRr-e_5Dd5liYikLIDXDlzG2Dbp33Yu6PGQQ2ZnbwAxTw&oe=644096DE",
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            Santhosh J
          </Text>
          <Text style={styles.time}>08:39 AM</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textMessage} numberOfLines={2}>
            This is the last message item. lorem ipsum dolor sit am Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Scripta periculis ei
            eam, te pro movet reformidans. Soluta facilisi instructior eam in,
            ferri oratio ancillae te ius. Scripta periculis ei eam, te pro movet
            reformidans. Scripta periculis ei eam, te pro movet reformidans.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
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
    paddingBottom:10
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
