import { useState } from "react";
import { Text, TextInput, View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { Foundation } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Home() {

    const [post, setPost] = useState([
        {
           community: {
                name: 'Minecraft',
                // img: require('../assets/favicon.png'),
           },
           title: 'Title',
           bodyText: "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
           vote: 5,
           comments: 10, 
        },
        {
            community: {
                 name: 'Minecraft',
                 // img: require('../assets/favicon.png'),
            },
            title: 'Title',
            bodyText: "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
            vote: 5,
            comments: 10, 
         },
         {
            community: {
                 name: 'Minecraft',
                 // img: require('../assets/favicon.png'),
            },
            title: 'Title',
            bodyText: "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
            vote: 5,
            comments: 10, 
         },
         {
            community: {
                 name: 'Minecraft',
                 // img: require('../assets/favicon.png'),
            },
            title: 'Title',
            bodyText: "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
            vote: 5,
            comments: 10, 
         },
         {
            community: {
                 name: 'Minecraft',
                 // img: require('../assets/favicon.png'),
            },
            title: 'Title',
            bodyText: "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
            vote: 5,
            comments: 10, 
         },
         {
            community: {
                 name: 'Minecraft',
                 // img: require('../assets/favicon.png'),
            },
            title: 'Title',
            bodyText: "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
            vote: 5,
            comments: 10, 
         },
         {
            community: {
                 name: 'Minecraft',
                 // img: require('../assets/favicon.png'),
            },
            title: 'Title',
            bodyText: "Open a PR, have someone else like @brentvatne look at it. If it's good to go, publish the final version, update the website version again, then merge. The website will be deployed when you merge to master",
            vote: 5,
            comments: 10, 
         },
    ])

    return (
        <View style={styles.container}>
            <FlatList
                data={post}     
                renderItem={({item}) => (
                    <TouchableOpacity style={{borderTopWidth: 1, borderTopColor: '#000000', flex: 1, padding: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../../assets/favicon.png')} style={{width: 30, height: 30, borderRadius: 15}}/>
                            <Text style={{fontWeight: 'bold'}}>{item.community.name}</Text>
                        </View>
                               
                        <View>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
                        </View>

                        <View>
                            <Text>{item.bodyText}</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#808080', borderRadius: 20, paddingTop: 3, paddingBottom: 3, paddingLeft: 10, paddingRight: 10}}>
                                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 5}}>
                                    <Foundation name="arrow-up" size={20} color="black" />
                                    <Text style={{paddingLeft: 5}}>{item.vote}  |</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{paddingLeft: 5, paddingRight: 5}}>
                                    <Foundation name="arrow-down" size={20} color="black" />
                                </TouchableOpacity>
                            </View> 

                            <TouchableOpacity style={{
                                flexDirection: 'row', 
                                borderWidth: 1, 
                                borderColor: '#808080', 
                                borderRadius: 20, paddingTop: 3, paddingBottom: 3, paddingLeft: 15, paddingRight: 15, 
                                justifyContent: 'center', alignItems: 'center', paddingLeft: 5, marginLeft: 10
                                }}>
                                <Ionicons name="chatbox-outline" size={20} color="black" style={{marginLeft: 5, marginRight: 5}}/>
                                <Text style={{fontWeight: 'bold'}}>{item.comments} Comments</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <TouchableOpacity style={{
                                    flexDirection: 'row', 
                                    borderWidth: 1, 
                                    borderColor: '#808080', 
                                    borderRadius: 20, 
                                    paddingTop: 3, paddingBottom: 3, paddingLeft: 10, paddingRight: 7, 
                                    justifyContent: 'center', alignItems: 'center', paddingLeft: 5, marginLeft: 10
                                    }}>
                                <MaterialCommunityIcons name="share" size={20} color="black" style={{marginLeft: 5, marginRight: 5}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});