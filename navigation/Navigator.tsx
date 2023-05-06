import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import NewsOverView from "../screens/NewsOverView";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Saved from "../screens/Saved";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Homescreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home"  component={Home} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Homescreen" options={{headerShown:false}}component={Homescreen} />
        <Stack.Screen name="NewsOverView" component={NewsOverView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
