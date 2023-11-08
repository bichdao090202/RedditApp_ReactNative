import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect, useRef } from "react";
import { Entypo } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import * as Progress from "react-native-progress";
import { firebase } from "./firebaseConfig";
import { Video } from "expo-av";

const windowWidth = Dimensions.get("window").width;

export default function CreateScreen() {
  const [community, setCommunity] = useState({
    img: require("../../../assets/avatar.png"),
    name: "Minecraft",
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [postType, setPostType] = useState("text");
  const [image, setImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const video = useRef(null);
  const [status, setStatus] = useState({});

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    console.log(count.current);
  });

  const pickVideo = async () => {
    setPostType("video");
    setImage(null);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
    });
    if (!result.canceled) {
      setSelectedVideo(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    setPostType("image");
    setSelectedVideo(null);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      //   aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();

    const storageRef = firebase
      .storage()
      .ref()
      .child("images/" + new Date().getTime());
    const uploadTask = storageRef.put(blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress, like showing a progress bar.
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        // Handle any errors.
        console.error(error);
      },
      () => {
        // Handle successful upload. Get the download URL.
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  // useEffect(() => {
  //   setUploadProgress(0);
  // }, [image]);

  const ImageView = () => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {/* {image && (

        )} */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              marginTop: 10,
            }}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 350, height: 450 }}
            />
          </View>

          {uploadProgress > 0 && (
            <View>
              <Progress.Bar
                size={100}
                progress={uploadProgress / 100}
                showsText
                formatText={() => `${uploadProgress.toFixed(2)}%`}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  };

  const VieoView = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Video
          // ref={video}
          style={{ flex: 1, alignSelf: "stretch", width: 350, height: 450 }}
          // source={{
          //   uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          // }}
          source={{ uri: selectedVideo }}
          useNativeControls
          resizeMode="contain"
          isLooping
          // onPlaybackStatusUpdate={setStatus}
        />
      </View>
    );
  };

  const TextView = () => {
    return (
      <TextInput
        style={{
          fontSize: 20,
          marginTop: 10,
        }}
        placeholder="body text"
        multiline={true}
      />
    );
  };

  const PostTypeInput = () => {
    if (postType === "text") {
      return <TextView />;
    } else if (postType === "image") {
      return <ImageView />;
    } else {
      return <VieoView />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View style={styles.container}>
          <View style={{ flex: 3 }}>
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 1,
                borderBottomColor: "grey",
                paddingBottom: 10,
                marginBottom: 5,
              }}
            >
              <View style={{ flex: 7, flexDirection: "row" }}>
                <Text style={{ fontSize: 20 }}>Post to:</Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={community.img}
                    style={{ width: 30, height: 30, borderRadius: 15 }}
                  />
                  <Text style={{ fontSize: 15 }}>r/{community.name}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 3,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity>
                  <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            <TextInput
              style={{
                fontWeight: "bold",
                fontSize: 25,
                borderBottomWidth: 1,
                borderBottomColor: "grey",
                paddingBottom: 10,
                marginTop: 5,
              }}
              placeholder="Title"
              multiline={true}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setPostType("text");
                  setImage(null);
                  setSelectedVideo(null);
                }}
              >
                <Entypo name="text" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 20 }} onPress={pickImage}>
                <Entypo name="image" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 20 }} onPress={pickVideo}>
                <Entypo name="video" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <PostTypeInput />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
});
