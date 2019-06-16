import * as React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  Modal,
  TouchableHighlight
} from 'react-native'
class Main extends React.Component {
  public static navigationOptions = {
    title: 'T1'
  }
  public state = {
    modalVisible: false
  }

  public setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible })
  }
  public render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: '#000000'
        }}>
        <StatusBar barStyle='dark-content' />
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}
          // presentationStyle='formSheet'
        >
          <View
            style={{
              flex: 1,
              // backgroundColor: 'rgba(0,0,0,.1)'
            }}
          >
            <View
              style={{
                width: '100%',
                height: 200,
                position: 'absolute',
                paddingTop: 20,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                bottom: 0,
                backgroundColor: 'black',
              }}
            >
              <Text
                style={{
                  color: '#fff'
                }}
              >
                World!
              </Text>

              <TouchableHighlight
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 10
                }}
                onPress={() => {
                  this.setModalVisible(false)
                }}
              >
                <Text
                  style={{
                    color: '#fff'
                  }}
                >关闭</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Text
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}
        >
          打开modal
        </Text>
      </View>
    )
  }
}
export default Main
