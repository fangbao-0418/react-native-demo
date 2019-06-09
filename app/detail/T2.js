import React from "react"; 
import { View, Text } from "react-native"; 
class Main extends React.Component {
    static navigationOptions = {
        title: 'T2',
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
                        this.props.navigation.navigate('T2')
                    }}
                >T2</Text>
            </View>
        );
    }
}
export default Main