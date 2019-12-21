import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListThumbnail from '../native-base-components/ListThumbnail';

export default class Top extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Top',
        headerBackTitle: null,
        headerLeft: (
            <Icon
                name="bars"
                size={24}
                onPress={() => {
                    navigation.openDrawer();
                }}
                style={{ paddingLeft: 20 }}
            />
        ),
    });

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
            >
                <ListThumbnail />
                {/* <Text>Stack1</Text>
                <Button
                    title="GoTo Stack2"
                    onPress={() => this.props.navigation.navigate('Stack2')}
                /> */}
            </View>
        );
    }
}
