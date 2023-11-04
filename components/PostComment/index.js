import { styles } from "./style";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"

const post = { id: 1, title: "Despite my efforts, traffic to my site continues to decline", community: "SEO", user: "dirtydominion", avatar: require('../../assets/avatar.png'), time: "3h", like: 113, content: "Hello, There you go, I created a tech blog almost 2 years ago now (easy-tutorials.com) , I made a lot of effort at the SEO and technical level to make it as good as possible but unfortunately without much results because the traffic is not taking off especially with all its Google updates." };
const comment = [
    { id: 1, level: 1, user: "SEO-pro-2001", like: 16, time: "3 day", avatar: require('../../assets/avatar2.png'), content: "Lok at the competition that is ranking well and emulate their SEO tactics. Also, I noticed and read your article on Optimizing Your Website for Higher Search Engine Rankings" },
    { id: 2, level: 2, user: "dirtydominion", like: 1, time: "2 day", avatar: require('../../assets/avatar3.png'), content: "Thank you for your advice and regarding the errors in the article that you mentioned, are these errors of idea or spelling mistakes?" },
    { id: 3, level: 1, user: "vinberdon", like: 10, time: "1 day", avatar: require('../../assets/avatar4.png'), content: "Lok at the competition that is ranking well and emulate their SEO tactics. \nAlso, I noticed and read your article on Optimizing Your Website for Higher Search Engine Rankings and saw many errors, so I'd suggest researching better before writing as readers will notice when things are not factual and stop coming." },
    { id: 4, level: 1, user: "mayredmoon", like: 5, time: "18 h", avatar: require('../../assets/avatar5.png'), content: "Your article is bad, sorry. You use too many tech jargon that newbie won’t understand. Your target audience is beginner, not expert \nUse simple english word. Seperate block of text to few sentence. Use more heading. Use more related image. Use PAS writing formula" },
    { id: 5, level: 1, user: "Phronesis2000", like: -1, time: "3day", avatar: require('../../assets/avatar6.png'), content: "You should really start to invest in SEO - none of these are SEO. \nYou need to build up your authority. Matt Cutts on Google - watch all of these first" },
]
export default function PostComment() {
    const BreakSpace = () => {
        return (
            <View style={{ backgroundColor: '#f1f3f5', height: 10, width: '100vw' }}></View>
        )
    }

    const CommentView = ({ listComment }) => {
        return (
            <View>
                {listComment.map((object) => (
                    <View>
                        <BreakSpace></BreakSpace>
                        <View style={styles.commentView}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={object.avatar} style={styles.avatar}></Image>
                                <Text style={{ fontWeight: 'bold' }}>{object.user}</Text>
                                <Text>{object.time}</Text>
                            </View>
                            <View>
                                <Text>{object.content}</Text>
                            </View>
                            <View style={styles.commentButtonBar}>
                                <View style={styles.commentButton}>
                                    <TouchableOpacity>
                                        <Image style={styles.btnIcon} source={require('../../assets/moreicon.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.commentButton}>
                                    <TouchableOpacity style={styles.replyView}>
                                        <Image style={styles.btnIcon} source={require('../../assets/replyicon.png')}></Image>
                                        <Text style={{ fontWeight: '500' }}>Reply</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.commentButton}>
                                    <TouchableOpacity>
                                        <Image style={styles.btnIcon} source={require('../../assets/likeicon.png')}></Image>
                                    </TouchableOpacity>
                                    <Text>{object.like}</Text>
                                    <TouchableOpacity>
                                        <Image style={styles.btnIcon} source={require('../../assets/dislikeicon.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.postView}>
                <View style={styles.postIntro}>
                    <Image source={post.avatar} style={styles.avatar}></Image>
                    <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>r/{post.community}</Text>
                        <Text >u/{post.user} - {post.time}</Text>
                    </View>
                </View>
                <View style={styles.postContent}>
                    <Text style={styles.postTitle}>{post.title}</Text>
                    <Text style={styles.text}>{post.content}</Text>
                </View>
                <View style={styles.postButtonBar}>
                    <View style={styles.postButtonView}>
                        <TouchableOpacity>
                            <Image style={styles.btnIcon} source={require('../../assets/likeicon.png')}></Image>
                        </TouchableOpacity>
                        <Text>{post.like}</Text>
                        <TouchableOpacity>
                            <Image style={styles.btnIcon} source={require('../../assets/dislikeicon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.postButtonView}>
                        <TouchableOpacity>
                            <Image style={styles.btnIcon} source={require('../../assets/commenticon.png')}></Image>
                        </TouchableOpacity>
                        <Text>{comment.length}</Text>
                    </View>
                    <View style={styles.postButtonView}>
                        <TouchableOpacity>
                            <Text>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <CommentView listComment={comment}></CommentView>
            <BreakSpace></BreakSpace>
            <View style={styles.commentFrame}>
                <TextInput placeholder=" Add a comment" style={styles.commentText}></TextInput>
                <TouchableOpacity>
                    <Image style={styles.posticon} source={require('../../assets/posticon.png')}></Image>
                </TouchableOpacity>
            </View>

        </View>
    )
}