import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import ServerUrl from "../../../ServerUrl";
import axios from "axios";
import PostCommunityView from "../../PostCommunityView";

export default function UserCommunityScreen() {
  const route = useRoute();
  const communityId = route.params?.communityId;
  const [community, setCommunity] = useState({});
  const [user, setUser] = useState(route.params?.user);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .post(ServerUrl + "/api/communities/find", {
        id: communityId,
      })
      .then((response) => {
        // console.log(response.data);
        setCommunity(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .post(ServerUrl + "/api/posts/community", {
        id: communityId,
      })
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      });
  }, []);

  return (
    <View styles={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Text>Header</Text>
      </View>
      <View style={{ width: "100%", marginBottom: 140 }}>
        <ScrollView>
          <View style={{ backgroundColor: "#fff", padding: 10 }}>
            <View style={{ height: 60, flexDirection: "row" }}>
              <View style={{ flex: 2 }}>
                <Image
                  source={{ uri: community.imageUrl }}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
              </View>
              <View style={{ flex: 7 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 20 }}>r/{community.name}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text>{} members</Text>
                </View>
              </View>
              <View style={{ flex: 3 }}>
                <Button title="Join"></Button>
              </View>
            </View>
            <View>
              <Text>{community.description}</Text>
            </View>
            <TouchableOpacity>
              <Text style={{ color: "blue" }}>See community info</Text>
            </TouchableOpacity>
          </View>

          {
            // lấy post list trong community và truyền vào PostView
            post.map((item) => (
              <PostCommunityView key={item.post.id} item={item} />
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
