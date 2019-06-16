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
const AppNavigator = createMaterialTopTabNavigator(
  {
    Photo,
    Camera,
    Form
  },
  {
    initialRouteName: 'Photo'
  }
)
export default createAppContainer(AppNavigator)
