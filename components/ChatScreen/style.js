import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
    },
    viewChat:{
        flexDirection:'row',
        height:50,

    },
    viewAvatar:{
        width:'15%',
        justifyContent:'center',
        alignItems:'center',
    },
    viewChatMiddle:{
        width:'70%',
        justifyContent:'center',
    },
    textUsername:{
        fontWeight:'bold',
        fontSize:20,
    },
    imgUserAvatar:{
        height:30,
        width:30,
        borderRadius:15,
    },
})