import React from 'react'
import {
  View
} from 'react-native'
import {
  NavigationScreenConfigProps
} from 'react-navigation'
import {
  Button
} from '@ant-design/react-native'
class Main extends React.Component<NavigationScreenConfigProps> {
  public render () {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button
          style={{
            width: 200
          }}
          type='primary'
          onPress={() => (
            this.props.navigation.push('TopTabNavigator')
          )}
        >
          头部页签测试
        </Button>
        <Button
          style={{
            width: 200,
            marginTop: 20
          }}
          type='primary'
          onPress={() => (
            this.props.navigation.push('Photo')
          )}
        >
          相册测试
        </Button>
        <Button
          style={{
            width: 200,
            marginTop: 20
          }}
          type='primary'
          onPress={() => (
            this.props.navigation.push('Interaction')
          )}
        >
          数据交互测试
        </Button>
        <Button
          style={{
            width: 200,
            marginTop: 20
          }}
          type='primary'
          onPress={() => (
            this.props.navigation.push('Webview')
          )}
        >
          webview测试
        </Button>
      </View>
    )
  }
}
export default Main
