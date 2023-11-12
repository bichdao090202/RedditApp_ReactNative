import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/screens/Home";
import CommunityScreen from "./components/screens/CommunityScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./components/screens/ProfileScreen";
import MenuScreen from "./components/screens/MenuScreen";
import ChatScreen from "./components/screens/ChatScreen";
import InboxScreen from "./components/screens/InboxScreen";
import PostComment from "./components/PostComment";
import CustomHeader from "./components/headers/custom-header/CustomHeader";
import CreateCommunityScreen from "./components/screens/create-community-screen/CreateCommunityScreen";

import ChatScreenHeader from "./components/headers/ChatScreenHeader";
import InboxScreenHeader from "./components/headers/InboxScreenHeader";
import CreateScreen from "./components/screens/create-screen/CreateScreen";
import ChooseCommunityScreen from "./components/screens/choose-community-screen/ChooseCommunityScreen";
import UserCommunityScreen from "./components/screens/user-community-screen/UserCommunityScreen";
import { useState, useRef, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import LoginScreen from "./components/screens/login-screen/LoginScreen";
import RegisterScreen from "./components/screens/register-screen/RegisterScreen";
import { View } from "react-native";

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const CommunityStack = createNativeStackNavigator();
const CreatePostStack = createNativeStackNavigator();
const MenuStack = createNativeStackNavigator();

const HoneStackScreen = () => {
  const route = useRoute();
  const [user, setUser] = useState(route.params?.user);

  useEffect(() => {
    if (route.params?.user) {
      // console.log(route.params?.user);
      setUser(route.params?.user);
    }
  }, [route.params?.user]);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeStack"
        component={Home}
        options={{ header: () => null }}
      />
      <HomeStack.Screen name="ProfileScrenn" component={ProfileScreen} />
      <HomeStack.Screen name="PostComment" component={PostComment} />
      <HomeStack.Screen
        name="MenuStackScreen"
        component={MenuStackScreen}
        options={{ header: () => null }}
      />
    </HomeStack.Navigator>
  );
};

const MenuStackScreen = () => {
  const route = useRoute();
  const [user, setUser] = useState(route.params?.user);

  return (
    <MenuStack.Navigator screenOptions={{ header: () => null }}>
      <MenuStack.Screen
        name="UserCommunityScreen"
        component={UserCommunityScreen}
      />
      <MenuStack.Screen name="MenuScreen" component={MenuScreen} />
      <MenuStack.Screen
        name="CreateCommunityScreen"
        component={CreateCommunityScreen}
      />
    </MenuStack.Navigator>
  );
};

const CommunityStackScreen = () => {
  const route = useRoute();
  const [user, setUser] = useState(route.params?.user);

  useEffect(() => {
    if (route.params?.user) {
      // console.log(route.params?.user);
      setUser(route.params?.user);
    }
  }, []);
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{
          header: () => null,
        }}
      />
      <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <HomeStack.Screen
        name="MenuStackScreen"
        component={MenuStackScreen}
        options={{ header: () => null }}
      />
    </HomeStack.Navigator>
  );
};

function ChatScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ChatStack"
        component={ChatScreen}
        options={{ header: () => <ChatScreenHeader title="Chats" /> }}
      />
      <HomeStack.Screen name="ProfileScrenn" component={ProfileScreen} />
      <HomeStack.Screen
        name="MenuStackScreen"
        component={MenuStackScreen}
        options={{ header: () => null }}
      />
    </HomeStack.Navigator>
  );
}

function InboxScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="InboxStack"
        component={InboxScreen}
        options={{ header: () => <InboxScreenHeader title="Inbox" /> }}
      />
      <HomeStack.Screen name="ProfileScrenn" component={ProfileScreen} />
      <HomeStack.Screen
        name="MenuStackScreen"
        component={MenuStackScreen}
        options={{ header: () => null }}
      />
    </HomeStack.Navigator>
  );
}

function CreateScreenStack() {
  return (
    <CreatePostStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <CreatePostStack.Screen name="CreateScreen" component={CreateScreen} />
      <CreatePostStack.Screen
        name="ChooseCommunityScreen"
        component={ChooseCommunityScreen}
      />
    </CreatePostStack.Navigator>
  );
}

const MenuTab = () => {
  const route = useRoute();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (route.params?.user) {
      setUser(route.params?.user);
    }
  }, [route.params?.user]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Communities") {
            iconName = focused ? "people-circle" : "people-circle-outline";
          } else if (route.name === "Create") {
            iconName = "add";
          } else if (route.name === "Chat") {
            iconName = focused
              ? "chatbubble-ellipses"
              : "chatbubble-ellipses-outline";
          } else if (route.name === "Inbox") {
            iconName = focused ? "notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // headerShown: false,
        header: () => null,
        tabBarStyle: {
          display: route.name === "Create" ? "none" : "flex",
        },
      })}
    >
      <Tab.Screen name="Home" component={HoneStackScreen}></Tab.Screen>
      <Tab.Screen
        name="Communities"
        component={CommunityStackScreen}
      ></Tab.Screen>
      <Tab.Screen name="Create" component={CreateScreenStack}></Tab.Screen>
      <Tab.Screen name="Chat" component={ChatScreenStack}></Tab.Screen>
      <Tab.Screen name="Inbox" component={InboxScreenStack}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="MenuTab" component={MenuTab} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
