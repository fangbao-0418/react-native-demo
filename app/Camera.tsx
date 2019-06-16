import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, CameraRoll } from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera'
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
)

class Main extends React.Component {
  public static navigationOptions = {
    title: '相机测试',
  }
  public camera: RNCamera
  public async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      console.log(this.camera, 'xxx')
      const camera = this.camera
      const data = await camera.takePictureAsync(options)
      console.log(data.uri, 'uri')
      console.log(CameraRoll.saveToCameraRoll, 'CameraRoll')
      const res = await CameraRoll.saveToCameraRoll(data.uri, 'photo')
      console.log(res, 'res')
    }
  }
  public render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes)
          }}
        >
          {/* {() => {
             return <PendingView />;
            // return (
            //   <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            //     <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
            //       <Text style={{ fontSize: 14 }}> SNAP </Text>
            //     </TouchableOpacity>
            //   </View>
            // );
          }} */}
        </RNCamera>
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})
export default Main
