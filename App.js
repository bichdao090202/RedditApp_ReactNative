import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import PostComment from './components/PostComment/index';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PostComment">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="PostComment" component={PostComment}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
