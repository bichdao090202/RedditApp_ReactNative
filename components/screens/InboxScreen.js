import { Image, Text, TouchableOpacity, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const InboxScreen = ({ route, navigation }) => {
    var listChat = [
        {
            userName: 'Ngoc Bich',
            chat: 'Hello',
            avatar: require("../../assets/avatar.png"),
            time: '10:00 AM'
        },
        {
            userName: 'John Masan',
            chat: 'Hi',
            avatar: require("../../assets/avatar2.png"),
            time: '10:05 AM'
        },
        {
            userName: 'Ngoc Bich',
            chat: ' Very loud Karaoke in villas near my apartment. Why no one is doing anything',
            avatar: require("../../assets/avatar.png"),
            time: '10:30 AM'

        },
        {
            userName: 'John Masan',
            chat: 'If you are from USA, you ever heard vietnamese people complain about mass ',
            avatar: require("../../assets/avatar2.png"),
            time: '10:40 AM'

        },
        {
            userName: 'John Masan',
            chat: 'The last thing you bought is now permanently out of stock. How screwed ',
            avatar: require("../../assets/avatar2.png"),
            time: '10:41 AM'
        },

    ]

    // const data = () => {
    //     id = route.params?.iid
    //     fetch(`https://656433bbceac41c0761d9823.mockapi.io/chatdetail/${id}`)
    //       .then((response) => response.json())
    //       .then((json) => {
    //         setListChatDetail(JSON.parse(json.mess));     
    //       });
    // }
    // useEffect(() => {
    //     data();
    // }, [load,id])


    const ChatDetails = ({ listChat }) => {
        return (
            <View style={{ backgroundColor: 'white' }}>
                {listChat.map((item) => (
                    <View style={styles.viewChat} >
                        <View style={styles.viewAvatar}>
                            <Image source={item.avatar} style={styles.imgUserAvatar}></Image>
                        </View>
                        <View style={styles.viewChatMiddle}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={styles.textName}>{item.userName}</Text>
                                <Text style={{paddingLeft:20, fontWeight:'400', fontSize:12}}>{item.time}</Text>
                            </View>
                            <Text style={styles.textChat}>{item.chat}</Text>
                        </View>
                    </View>
                ))}
            </View>
        );
    };
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ChatDetails listChat={listChat} style={{ backgroundColor: 'white' }} />
        </View>
    )
}

export default InboxScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    textChat: {
        fontSize: 15,
    },
    viewChat: {
        flexDirection: 'row',
        height: 45,
        margin: 10,
    },
    viewAvatar: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewChatMiddle: {
        flex: 1,
        width: '70%',
        justifyContent: 'center',
    },
    imgUserAvatar: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    commentFrame: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        zIndex: 1,
    },
})

