import React from "react"; 
import { View, Text, Animated } from "react-native"; 
class Main extends React.Component {
    static navigationOptions = {
        title: 'animated 111',
    }
    state = {
      fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
      scale: new Animated.Value(.8),
    }
    componentDidMount () {
      console.log('did mount')
      Animated.parallel([
        Animated.timing(
          // timing方法使动画值随时间变化
          this.state.fadeAnim, // 要变化的动画值,
          {
            toValue: 1, // 最终的动画值
            duration: 2000, 
          },
        ),
        Animated.spring(
          // timing方法使动画值随时间变化
          this.state.scale, // 要变化的动画值,
          {
            toValue: 1, // 最终的动画值
            duration: 1000, 
          },
        ),
        Animated.spring(
          // timing方法使动画值随时间变化
          this.state.scale, // 要变化的动画值,
          {
            toValue: .8, // 最终的动画值
            duration: 1000,
            delay: 2000
          },
        )
      ]).start();
    }
    render() {
      let { fadeAnim, scale } = this.state;
      console.log(fadeAnim, 'fadeAnim')
      // const scale = this.state.scale.interpolate({
      //   inputRange: [-1, -0, 0, 1, 1],
      //   outputRange: [1, 0, 1, 0, 0]
      // })
        return (
            <View 
                style={{ 
                flex: 1, 
                alignItems: "center", 
                justifyContent: "center" 
                }}> 
                <Animated.View
                  style={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'black',
                    opacity: fadeAnim,
                    position: 'absolute',
                    top: '50%',
                    opacity: fadeAnim,
                    transform: [{translateY: -150}, {scale}]
                  }}
                  ref='text'
                  onPress={() => {
                      this.props.navigation.navigate('Home')
                  }}
                ></Animated.View>
            </View>
        );
    }
}
export default Main