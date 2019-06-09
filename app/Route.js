import React from "react"; 
import { View, Text } from "react-native"; 
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Home from './Home'
import Detail from './detail' 
const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Details: Detail
  },
  {
    initialRouteName: "Home",
    headerMode: 'none'
  }
);
export default createAppContainer(AppNavigator);