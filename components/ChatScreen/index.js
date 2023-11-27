import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function PostComment(navigation) {
    const listChat = [
        {
            userId: 1,
            userName: "Nguyen Van A",
            time: "Nov 25",
            lastMess: "Hello",
            avatar: require("../../assets/avatar1.png"),
        },
        {
            userId: 2,
            userName: "em4399",
            time: "Sep 23",
            lastMess: "See you",
            avatar: require("../../assets/avatar2.png"),
        },
        {
            userId: 3,
            userName: "Creem Eden",
            time: "May 3",
            lastMess: "Just yesterday",
            avatar: require("../../assets/avatar3.png"),
        },
    ]

    const listChatDetail = [
        {
            userId: 1,
            mess: [
                {
                    yourMess: "Hi",
                    time: "10:00",
                },
                {
                    myMess: "Hello",
                    time: "10:01",
                }
            ]
        },
        {
            userId: 2,
            mess: [
                {
                    yourMess: "Hello",
                    time: "10:00",
                },
                {
                    myMess: "Hi",
                    time: "10:01",
                }
            ]
        },

    ]
    const ChatComponent = ({ listChat }) => {
        return (
            <View style={{ flex: 1 }}>
                {listChat.map((item) => (
                    <TouchableOpacity style={styles.viewChat} onPress={navigation.InboxStack}>
                        <View style={styles.viewAvatar}>
                            <Image source={item.avatar} style={styles.imgUserAvatar}></Image>
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

    const ChatDetail = () => {
        return(
            <View>
                <Text>ChatDetail</Text>
            </View>
        
        )
    }

    return (
        <View style={styles.container}>
            <ChatComponent listChat={listChat} />
        </View>
    )
}