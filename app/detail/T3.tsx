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
  public render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >

        <Button
          title='按钮'
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true
            }).then((image) => {
              console.log(image)
            })
          }}
        ></Button>
      </View>
    )
  }
}
