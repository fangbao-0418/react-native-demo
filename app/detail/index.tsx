import * as React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'
import T1 from './T1'
import T2 from './T2'
import T3 from './T3'
import Menu from './Menu'
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
const AppNavigator = createDrawerNavigator(
  {
    T1,
    T2,
    T3
  },
  {
    initialRouteName: 'T1',
    contentComponent: (props) => {
      console.log(props, 'contentComponent')
      return (
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#FFF'
          }}
        >
          <SafeAreaView>
            <Menu
              activeItemKey={props.activeItemKey}
              style={{
                marginTop: 20
              }}
              dataSource={menuConfig}
            />
          </SafeAreaView>
        </ScrollView>
      )
    }
  }
)
export default createAppContainer(AppNavigator)
