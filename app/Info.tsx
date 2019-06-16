import * as React from 'react'
import { View, Text } from 'react-native'
import * as fit from './utils/fit'
export default class extends React.Component {
  public render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: 12
          }}
        >
          {JSON.stringify(fit.info)}
        </Text>
        <View
          style={{
            width: 187.5,
            height: 187.5,
            backgroundColor: 'red'
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 30
            }}
          >
            返回字体大小缩放比例。这个比例可以用于计算绝对的字体大小，所以很多深度依赖字体大小的组件需要用此函数的结果进行计算。
        </Text>
        </View>
        <View
          style={{
            width: 187.5,
            height: 187.5,
            backgroundColor: 'red'
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 12
            }}
          >
            W: {fit.w(187.5)},  H: {fit.w(187.5)}
          </Text>
        </View>
        <View
          style={{
            width: 187.5,
            height: 187.5,
            backgroundColor: 'red'
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 12
            }}
          >
            W: {fit.w(187.5)},  H: {fit.w(187.5)}
          </Text>
        </View>
      </View>
    )
  }
}
