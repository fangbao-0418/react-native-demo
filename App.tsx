import * as React from 'react'
import {
  View,
  SafeAreaView
} from 'react-native'
import Navigator from './app/index'
export default class extends React.Component {
  public render () {
    return (
      <SafeAreaView
        style={{
          flex: 1
        }}
      >
        <Navigator />
      </SafeAreaView>
    )
  }
}
// export default Main
