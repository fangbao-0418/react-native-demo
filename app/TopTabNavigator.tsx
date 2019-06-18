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
const AppNavigator = createMaterialTopTabNavigator(
  {
    Photo,
    Camera,
    Form,
    Interaction
  },
  {
    initialRouteName: 'Interaction'
  }
)
export default createAppContainer(AppNavigator)
