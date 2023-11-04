import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [post, setPost] = useState([
    {
      community: {
        name: "Minecraft",
        // img: require('../assets/favicon.png'),
      },
      title: "Title",
      bodyText:
        "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
      vote: 5,
      comments: 10,
    },
    {
      community: {
        name: "Minecraft",
        // img: require('../assets/favicon.png'),
      },
      title: "Title",
      bodyText:
        "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
      vote: 5,
      comments: 10,
    },
    {
      community: {
        name: "Minecraft",
        // img: require('../assets/favicon.png'),
      },
      title: "Title",
      bodyText:
        "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
      vote: 5,
      comments: 10,
    },
    {
      community: {
        name: "Minecraft",
        // img: require('../assets/favicon.png'),
      },
      title: "Title",
      bodyText:
        "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
      vote: 5,
      comments: 10,
    },
    {
      community: {
        name: "Minecraft",
        // img: require('../assets/favicon.png'),
      },
      title: "Title",
      bodyText:
        "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
      vote: 5,
      comments: 10,
    },
    {
      community: {
        name: "Minecraft",
        // img: require('../assets/favicon.png'),
      },
      title: "Title",
      bodyText:
        "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
      vote: 5,
      comments: 10,
    },
    {
      community: {
        name: "Minecraft",
        // img: require('../assets/favicon.png'),
      },
      title: "Title",
      bodyText:
        "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
      vote: 5,
      comments: 10,
    },
  ]);

  const BreakSpace = () => {
    return (
      <View
        style={{ backgroundColor: "#f1f3f5", height: 10, width: "100vw" }}
      ></View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={post}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  padding: 10,
                }}
                onPress={() => navigation.navigate("PostComment")}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/favicon.png")}
                    style={styles.avatarUser}
                  />
                  <Text style={{ fontWeight: "bold" }}>
                    r/{item.community.name}
                  </Text>
                </View>

                <View>
                  <Text style={styles.postTitle}>{item.title}</Text>
                </View>

                <View>
                  <Text>{item.bodyText}</Text>
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={styles.viewVote}>
                      <TouchableOpacity style={styles.upVoteButton}>
                        <Image
                          style={styles.btnIcon}
                          source={require("../../assets/likeicon.png")}
                        ></Image>
                        <Text style={{ paddingLeft: 5, fontWeight: "bold" }}>
                          {item.vote}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ paddingLeft: 5, paddingRight: 5 }}
                      >
                        <Image
                          style={styles.btnIcon}
                          source={require("../../assets/dislikeicon.png")}
                        ></Image>
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      style={styles.commentButton}
                      onPress={() => navigation.navigate("PostComment")}
                    >
                      <Ionicons
                        name="chatbox-outline"
                        size={20}
                        color="black"
                        style={{ marginLeft: 5, marginRight: 5 }}
                      />
                      <Text style={{ fontWeight: "bold" }}>
                        {item.comments} Comments
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <TouchableOpacity style={styles.shareButton}>
                      <MaterialCommunityIcons
                        name="share"
                        size={20}
                        color="black"
                        style={{ marginLeft: 5, marginRight: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              <BreakSpace />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  postTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },

  avatarUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  shareButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    marginLeft: 10,
  },

  commentButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    marginLeft: 10,
  },

  upVoteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
  },

  viewVote: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 20,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnIcon: {
    height: 20,
    width: 20,
    marginRight: 5,
    marginLeft: 5,
  },
});
