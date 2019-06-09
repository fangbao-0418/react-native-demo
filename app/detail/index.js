import React from "react"; 
import { View, Text } from "react-native"; 
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import T1 from './T1'
import T2 from './T2' 
const AppNavigator = createDrawerNavigator(
  {
    T1: T1,
    T2: T2
  },
  {
    initialRouteName: "T1"
  }
);
export default createAppContainer(AppNavigator);