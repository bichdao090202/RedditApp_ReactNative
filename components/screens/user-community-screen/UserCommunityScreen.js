import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserCommunityScreen(props) {
  return (
    <View styles={styles.container}>
      <Text>User Community Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
