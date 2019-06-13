import React from "react"; 
import { View, Text, ScrollView, SafeAreaView } from "react-native"; 
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
    initialRouteName: "T1",
    contentComponent: (...args) => {
      console.log(args, 'args')
      return (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#000'
          }}
        >
              <SafeAreaView
              >
            <Text
              style={{
                color: '#fff'
              }}
              onPress={() => {
                alert('222')
              }}
            >MENU</Text>
            </SafeAreaView>
        </ScrollView>
      )
    }
  }
);
export default createAppContainer(AppNavigator);