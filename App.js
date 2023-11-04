import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/screens/Home';
import CommunityScreen from './components/screens/CommunityScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import CustomHeader from './components/headers/CustomHeader';
import ProfileScreen from './components/screens/ProfileScreen';
import MenuScreen from './components/screens/MenuScreen';
import ChatScreen from './components/screens/ChatScreen';
import InboxScreen from './components/screens/InboxScreen';

import { View, TouchableOpacity, Text, Image } from 'react-native';
import ChatScreenHeader from './components/headers/ChatScreenHeader';
import InboxScreenHeader from './components/headers/InboxScreenHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const CommunityStack = createNativeStackNavigator();

function HoneStackScreen() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomeStack' component={Home} options={{header: () => <CustomHeader title='Home'/>}}/>
      <HomeStack.Screen name='ProfileScrenn' component={ProfileScreen}/>
      <HomeStack.Screen name='MenuScreen' component={MenuScreen}/>
    </HomeStack.Navigator>
  )
}

function CommunityStackScreen() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='CommunityStack' component={CommunityScreen} options={{header: () => <CustomHeader title='Communities'/>}}/>
      <HomeStack.Screen name='ProfileScrenn' component={ProfileScreen}/>
      <HomeStack.Screen name='MenuScreen' component={MenuScreen}/>
    </HomeStack.Navigator>
  )
}

function ChatScreenStack() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='ChatStack' component={ChatScreen} options={{header: () => <ChatScreenHeader title='Chats'/>}}/>
      <HomeStack.Screen name='ProfileScrenn' component={ProfileScreen}/>
      <HomeStack.Screen name='MenuScreen' component={MenuScreen}/>
    </HomeStack.Navigator>
  )
}

function InboxScreenStack() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name='InboxStack' component={InboxScreen} options={{header: () => <InboxScreenHeader title='Inbox'/>}}/>
      <HomeStack.Screen name='ProfileScrenn' component={ProfileScreen}/>
      <HomeStack.Screen name='MenuScreen' component={MenuScreen}/>
    </HomeStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Communities') {
              iconName = focused ? 'people-circle' : 'people-circle-outline';
            } else if (route.name === 'Create') {
              iconName = 'add';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
          },
          headerShown: false
        })}
        
      >
        <Tab.Screen name="Home" component={HoneStackScreen}></Tab.Screen>
        <Tab.Screen name="Communities" component={CommunityStackScreen}></Tab.Screen>
        <Tab.Screen name="Create" component={Home}></Tab.Screen>
        <Tab.Screen name="Chat" component={ChatScreenStack}></Tab.Screen>
        <Tab.Screen name="Inbox" component={InboxScreenStack}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
