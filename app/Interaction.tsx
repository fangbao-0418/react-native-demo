import * as React from 'react'
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native'
import http from './utils/http'
interface States {
  dataSource: Array<{name: string, picLink: string, singer: string}>
}
class Main extends React.Component<{}, States> {
  public static navigationOptions = {
    title: '数据交互'
  }
  public state: States = {
    dataSource: []
  }
  public componentWillMount () {
    http('http://www.xiaoxina.cn/api.php?s=%E7%A8%BB%E9%A6%99&num=10', 'GET')
    .then((res) => {
      console.log(res, 'res')
      this.setState({
        dataSource: res
      })
    })
    http('https://x-b.i-counting.cn/sys/user/v1/api/company/login/region', 'POST')
    .then((res) => {
      console.log(res, 'region')
    })
  }
  public render () {
    const { dataSource } = this.state
    return (
      <ScrollView
        style={{
          flex: 1,
          padding: 10
        }}
      >
        {
          dataSource.map((item, index) => {
            return (
              <View
                key={`${index}`}
                style={{
                  marginBottom: 10,
                  flexDirection: 'row'
                }}
              >
                <Image
                  source={{uri: item.picLink}}
                  style={{
                    width: 100,
                    height: 100
                  }}
                />
                <Text
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    fontSize: 20
                  }}
                >
                  歌曲：{item.name}
                  歌手：{item.singer}
                </Text>
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
}
export default Main
