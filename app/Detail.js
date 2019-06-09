import React from "react"; 
import { View, Text } from "react-native"; 
class Main extends React.Component {
    static navigationOptions = {
        title: 'detail',
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
                        this.props.navigation.navigate('Home')
                    }}
                >Detail</Text>
            </View>
        );
    }
}
export default Main