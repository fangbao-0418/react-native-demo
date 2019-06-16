import * as React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
interface States {
  value: string
}
export default class Main extends React.Component<{}, States> {
  public static navigationOptions = () => {
    return {
      title: '表单测试'
    }
  }
  public state: States = {
    value: ''
  }
  public render () {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#000',
          // justifyContent: 'flex-end',
          // alignItems: 'center',
          padding: 20
        }}
      >
        <KeyboardAvoidingView
          style={{
            flex: 1
          }}
        >
          <TextInput
            style={{
              color: '#FFF',
              width: 100,
              height: 40,
              borderWidth: 1,
              borderColor: '#FFF',
              margin: 100,
              padding: 5
            }}
            // value={this.state.value}
            placeholder='请输入密码'
            // multiline={true}
            textContentType='username'
            secureTextEntry={true}
            // keyboardType='number-pad'
            onChangeText={(value) => {
              this.setState({
                value
              })
            }}
          />
          <Text
            style={{
              color: '#FFF'
            }}
          >
            {this.state.value}
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}