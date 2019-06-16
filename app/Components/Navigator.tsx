import * as React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Touchable
} from 'react-native'
import { HeaderProps } from 'react-navigation'
import { navigator } from '../utils'
interface Props extends HeaderProps {
  title?: string
}
export default class extends React.Component<Props> {
  public render() {
    console.log(this.props, 'props')
    const { title } = this.props
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0, 1)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* <StatusBar
              // hidden={true}
              barStyle='light-content'
              translucent
              networkActivityIndicatorVisible={false}
            /> */}
        <View
          style={{
            width: '100%',
            paddingLeft: 10,
            paddingRight: 10,
            height: 50,
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'red',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              width: 100
            }}
          >
            <Text>
              {'< 返回'}
            </Text>
          </View>
          <View
          // style={{
          //   flex: 1
          // }}
          >
            <Text
              ref='title'
              style={{
                color: '#fff',
                fontSize: 20
              }}>
              {title || '导航器'}
            </Text>
          </View>
          <View
            style={{
              width: 100,
              alignItems: 'flex-end'
            }}
          >
            <Text>
              分享
            </Text>
          </View>
        </View>
      </SafeAreaView >
    )
  }
}
