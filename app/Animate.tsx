import * as React from 'react'
import { View, Text, Animated } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
interface Props {
  navigation: NavigationScreenProp<any>
}
class Main extends React.Component<Props> {
  public static navigationOptions = {
    title: 'animated'
  }
  public state = {
    fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
    scale: new Animated.Value(.8),
  }
  public componentDidMount() {
    console.log('did mount')
    Animated.parallel([
      Animated.timing(
        // timing方法使动画值随时间变化
        this.state.fadeAnim, // 要变化的动画值,
        {
          toValue: 1, // 最终的动画值
          duration: 1000,
        },
      ),
      Animated.spring(
        // timing方法使动画值随时间变化
        this.state.scale, // 要变化的动画值,
        {
          toValue: 1, // 最终的动画值
        },
      ),
      Animated.spring(
        // timing方法使动画值随时间变化
        this.state.scale, // 要变化的动画值,
        {
          toValue: .8, // 最终的动画值
          delay: 2000
        },
      )
    ]).start()
  }
  public render() {
    const { fadeAnim, scale } = this.state
    console.log(fadeAnim, 'fadeAnim')
    // const scale = this.state.scale.interpolate({
    //   inputRange: [-1, -0, 0, 1, 1],
    //   outputRange: [1, 0, 1, 0, 0]
    // })
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Animated.View
          style={{
            width: 300,
            height: 300,
            backgroundColor: 'black',
            // opacity: fadeAnim,
            position: 'absolute',
            top: '50%',
            opacity: fadeAnim,
            transform: [{ translateY: -150 }, { scale }]
          }}
          ref='text'
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        >
          <Text>xxxxx</Text>
        </Animated.View>
        <Text>xxxxx</Text>
      </View>
    )
  }
}
export default Main
