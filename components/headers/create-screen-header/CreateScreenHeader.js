import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export default function CreateScreenHeader() {
  const navigation = useNavigation();
  const resetToDefault = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <View style={styles.containner}>
      <View style={styles.view1}>
        <TouchableOpacity
          onPress={() => {
            resetToDefault();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Create Post
        </Text>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity
          style={{ backgroundColor: "#5cdb5c", borderRadius: 15, padding: 5 }}
        >
          <Text style={{ fontSize: 20 }}>Post</Text>
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
