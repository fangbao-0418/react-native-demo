import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import { InputItem, Checkbox } from '@ant-design/react-native'
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
              width: 100,
              height: 40,
              borderWidth: 1,
              borderColor: '#000',
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
          >
            {this.state.value}
          </Text>
          <InputItem
            // style={{
            //   color: '#FFF'
            // }}
          />
          <Checkbox>Checkbox</Checkbox>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}