import * as React from 'react'
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StatusBar,
  Modal,
  TouchableHighlight
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
export default class extends React.Component {
  public static navigationOptions = {
    title: '相册测试',
  }
  public componentDidMount () {
    // this.openPicker()
  }
  public openPicker () {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then((image) => {
      console.log(image)
    })
  }
  public render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

        <Button
          title='打开相册'
          onPress={() => {
            this.openPicker()
          }}
        ></Button>
      </View>
    )
  }
}
