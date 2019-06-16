import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationScreenConfigProps } from 'react-navigation'
class Main extends React.Component<NavigationScreenConfigProps> {
  public render  () {
    console.log(this.props, 'home')
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text
          onPress={() => {
            this.props.navigation.navigate('Detail')
          }}
        >
          点击去详情页
        </Text>
        <Button
          title='BottomTabNavigator'
          onPress={() => {
            this.props.navigation.navigate('ButtonTabNavigator')
          }}
        />
      </View>
    )
  }
}
export default Main
