import React from 'react';
import { View, Text, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Stack2 extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Stack1',
        headerRight: (
            <Icon
                name="bars"
                size={24}
                onPress={() => {
                    navigation.openDrawer();
                }}
                style={{ paddingRight: 340 }}
            />
        ),
    });
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Stack2</Text>
            </View>
        );
    }
}
