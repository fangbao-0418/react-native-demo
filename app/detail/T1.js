import React from "react"; 
import {
    View,
    Text,
    ActivityIndicator,
    StatusBar,
    Modal,
    TouchableHighlight
} from "react-native"; 
class Main extends React.Component {
    static navigationOptions = {
        title: 'T1',
    }
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View 
                style={{ 
                flex: 1, 
                alignItems: "center", 
                justifyContent: "center" 
                }}>
                <StatusBar barStyle="dark-content" />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                    >
                    <View style={{ marginTop: 22 }}>
                        <View>
                        <Text> World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <Text>Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                {/* <ActivityIndicator /> */}
                {/* <Text
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                >T1</Text>
                <Text
                    onPress={() => {
                        this.props.navigation.navigate('DrawerToggle')
                    }}
                >DrawerToggle</Text> */}
            </View>
        );
    }
}
export default Main