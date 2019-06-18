import * as React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation'
import Camera from './Camera'
import Photo from './Photo'
import Form from './Form'
import Home from './Home'
import Interaction from './Interaction'
import TopTabNavigator from './TopTabNavigator'
const AppNavigator = createStackNavigator(
  {
    Home,
    Photo,
    Camera,
    Form,
    Interaction,
    TopTabNavigator
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)
export default createAppContainer(AppNavigator)
