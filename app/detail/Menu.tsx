import * as React from 'react'
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Button,
  TouchableHighlight
} from 'react-native'
import { navigator } from '../utils'
interface Props {
  activeItemKey?: string
  style: StyleProp<ViewStyle>
  dataSource: Array<{ title: string, route: string }>
}
export default class Main extends React.Component<Props> {
  public render() {
    const { dataSource, activeItemKey } = this.props
    return (
      <View
        style={this.props.style}
      >
        {
          dataSource.map((item, index) => {
            const active = activeItemKey === item.route
            return (
              <TouchableHighlight
                key={`menu-touch-${index}`}
                onPress={() => {
                  navigator.navigate(item.route)
                }}
              >
                <View
                  key={`menu-${index}`}
                  style={{
                    backgroundColor: active ? 'blue' : null
                  }}
                >
                  <Text
                    style={{
                      color: active ? '#FFF' : '#000',
                      fontSize: 20,
                      lineHeight: 46,
                      marginLeft: 20
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </View>
    )
  }
}
