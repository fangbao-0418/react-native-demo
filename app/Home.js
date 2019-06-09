import React from "react"; 
import { View, Text } from "react-native"; 
class Main extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }
    
    render() {
        return (
            <View 
                style={{ 
                flex: 1, 
                alignItems: "center", 
                justifyContent: "center" 
                }}> 
                <Text
                    onPress={() => {
                        this.props.navigation.navigate('Details')
                    }}
                >Home 1</Text>
            </View>
        );
    }
}
export default Main