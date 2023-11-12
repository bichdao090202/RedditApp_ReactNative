import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import axios from "axios";
import ServerUrl from "../../ServerUrl";

export default function MenuScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [user, setUser] = useState(route.params?.user);
  const [communities, setcommunities] = useState([]);

  const handlePress = () => {
    // Xử lý khi nút được nhấn
    console.log("Button pressed!");
  };

  useEffect(() => {
    if (route.params?.user) {
      // console.log(route.params?.user);
      setUser(route.params?.user);
    }
  }, [route.params?.user]);

  useEffect(() => {
    axios
      .post(ServerUrl + "/api/communities/user", {
        id: user.id,
      })
      .then((response) => {
        setcommunities(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}></View>
      <ScrollView>
        <View>
          <Button
            onPress={() => {
              navigation.navigate("CreateCommunityScreen", { user: user });
              console.log(user);
            }}
            style={styles.button}
            title="Create a community"
          ></Button>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
            // backgroundColor: "#fff",
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Your community
          </Text>
        </View>
        {communities.map((item, index) => {
          return (
            <TouchableNativeFeedback
              onPress={handlePress}
              background={TouchableNativeFeedback.Ripple("#bfbfbf", false)}
              key={item.id}
            >
              <View style={styles.item}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    flex: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
