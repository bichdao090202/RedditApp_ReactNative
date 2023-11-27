import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";

var load = 0;
export default function PostComment({navigation}) {
    var [listChat,setListChat] = useState([]);
    useEffect(() => {
        getChats();
    }, [load])

    const getChats = () => {
        fetch('https://656433bbceac41c0761d9823.mockapi.io/chats')
          .then((response) => response.json())
          .then((json) => {
            if (load === 0) {
                setListChat(json);
              }
              load = 1;              
          });
    }

    const ChatComponent = ({ listChat }) => {
        return (
            <View style={{ flex: 1 }}>
                {listChat.map((item) => (
                    <TouchableOpacity style={styles.viewChat} onPress={()=>{
                          navigation.navigate("Inbox", {
                            screen: "InboxStack",
                            params: {
                                iid: item.id,
                              },
                          });
                    }}>
                        <View style={styles.viewAvatar}>
                            <Image source={require("../../assets/avatar2.png")} style={styles.imgUserAvatar}></Image>
                        </View>
                        <View style={styles.viewChatMiddle}>
                            <Text style={styles.textUsername}>{item.userName}</Text>
                            <Text>{item.lastMess}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ChatComponent listChat={listChat} />
        </View>
    )
}