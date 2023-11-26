import { View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import CustomHeader from "../headers/custom-header/CustomHeader";

export default function CommunityScreen() {
  const route = useRoute();
  const [user, setUser] = useState(route.params?.user);
  useEffect(() => {
    if (route.params?.user) {
      // console.log(route.params?.user);
      setUser(route.params?.user);
    }
  }, [route.params?.user]);
  return (
    <View style={styles.container}>
      <CustomHeader title="Community" user={user} />
      <Text>Community Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // padding: 10,
    alignItems: "center",
  },
});
