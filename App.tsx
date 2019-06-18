import * as React from 'react'
import {
  View,
  SafeAreaView
} from 'react-native'
import Navigator from './app/index'
import { Provider } from '@ant-design/react-native';
class Main extends React.Component {
  public render () {
    return (
      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        <Provider>
          <Navigator />
        </Provider>
      </SafeAreaView>
    )
  }
}
export default Main
