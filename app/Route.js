import React from "react"; 
import { View, Text, SafeAreaView, StatusBar, Animated } from "react-native"; 
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Home from './Home'
import Detail from './detail' 
import Animate from './Animate' 
const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Animate: {
      screen: Animate,
      navigationOptions: () => ({
        title: `abced`
      }),
    },
    Details: {
      screen: Detail,
      navigationOptions: () => ({
        title: `Abb`,
        headerBackTitle: null
      }),
    }
  },
  {
    initialRouteName: "Animate",
    // headerMode: 'none',
    headerBackTitleVisible: false,
    defaultNavigationOptions: ({ navigation }) => ({
      // headerStyle: {
      //   height: 50,
      //   color: '#FFF',
      //   fontSize: 30
      //   // backgroundColor: '#000'
      // },
      // headerTitle: () => {
      //   return <Text style={{
      //     color: 'blue'
      //   }}>2323</Text>
      // },
      header: (props) => {
        const { navigation } = props
        console.log(props, 'header')
        return (
          <SafeAreaView
            style={{
              height: 100,
              flex: 1,
              backgroundColor: 'rgba(0,0,0, .6)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <StatusBar
              // hidden={true}
              translucent
              networkActivityIndicatorVisible={false}
            />
            <Animated.Text
              ref='title'
            style={{
              color: '#fff',
              fontSize: 20
            }}>{`${navigation.state}'s Profile'`}</Animated.Text>
          </SafeAreaView>
        )
      }
    })
  });
export default createAppContainer(AppNavigator);