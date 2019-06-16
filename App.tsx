import * as React from 'react'
import { View, Text } from 'react-native'
import Route from './app/Route'
import { navigator } from './app/utils'
export default class Main extends React.Component {
  public render () {
    return (
      <Route
        ref={(ref) => {
          navigator.setTopLevelNavigator(ref)
        }}
      />
    )
  }
}
