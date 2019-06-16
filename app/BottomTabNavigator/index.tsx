import * as React from 'react'
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'
import T1 from '../detail/T1'
import T2 from '../detail/T2'
import T3 from '../detail/T3'
const menuConfig = [{
  title: '首页',
  route: 'Home'
}, {
  title: '相机测试',
  route: 'T2'
}, {
  title: '相册测试',
  route: 'T3'
}]
const AppNavigator = createBottomTabNavigator(
  {
    T1: {
      screen: T1,
      navigationOptions: () => ({
        title: '首页',
        tabBarIcon: () => {
          return (
            <Image
              style={{
                width: 20,
                height: 20
              }}
              source={require('../assets/images/home.png')}
            />
          )
        }
      })
    },
    T2: {
      screen: T1,
      navigationOptions: () => ({
        title: '购物车',
        tabBarIcon: () => {
          return (
            <Image
              style={{
                width: 20,
                height: 20
              }}
              source={require('../assets/images/shop.png')}
            />
          )
        }
      })
    },
    T3: {
      screen: T1,
      navigationOptions: () => ({
        title: '我的',
        tabBarIcon: () => {
          return (
            <Image
              style={{
                width: 20,
                height: 20
              }}
              source={require('../assets/images/me.png')}
            />
          )
        }
      })
    }
  },
  {
    initialRouteName: 'T1',
    tabBarOptions: {
      activeTintColor: '#ff6700'
    }
  }
)
export default createAppContainer(AppNavigator)
