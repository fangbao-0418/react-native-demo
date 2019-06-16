import * as React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation'
import Home from './Home'
import Info from './Info'
import Detail from './detail'
import Animate from './Animate'
import Navigator from './Components/Navigator'
import ButtonTabNavigator from './BottomTabNavigator'
const AppNavigator = createStackNavigator(
  {
    ButtonTabNavigator,
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: (props) => {
          return (
            <Navigator title='首页' {...props} />
          )
        }
      })
    },
    Animate: {
      screen: Animate,
      navigationOptions: () => ({
        title: `abced`
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: () => ({
        header: (props) => {
          return (
            <Navigator title='详情页' {...props} />
          )
        }
      }),
    },
    Info
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      header: (props) => {
        return (
          <Navigator {...props}/>
        )
      }
    })
  })
export default createAppContainer(AppNavigator)
