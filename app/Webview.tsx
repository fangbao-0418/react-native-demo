import React from 'react'
import { WebView } from 'react-native'
class Main extends React.Component {
  public render () {
    return (
      <WebView
        source={{uri: 'http://localhost:9000'}}
        style={{width: '100%', height: '100%', backgroundColor: 'red'}}
      >
      </WebView>
    )
  }
}
export default Main
