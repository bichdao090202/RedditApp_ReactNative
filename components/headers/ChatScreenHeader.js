import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatScreenHeader(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.containner}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={() => navigation.navigate("MenuScreen")}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          {props.title}
        </Text>
      </View>

      <View style={styles.view2}>
        <MaterialCommunityIcons
          name="chat-plus-outline"
          size={24}
          color="black"
        />
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScrenn")}>
          <Image
            source={require("../../assets/avatar.png")}
            style={styles.avatarUser}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containner: {
    height: 70,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  avatarUser: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },

  view1: {
    flex: 1,
    flexDirection: "row",
  },

  view2: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
