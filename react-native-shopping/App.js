import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Single1 from './src/screens/Single1';
import Single2 from './src/screens/Single2';
import Stack1 from './src/screens/Stack1';
import Stack2 from './src/screens/Stack2';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//stack
const Stack = createStackNavigator(
    {
        Stack1: { screen: Stack1 },
        Stack2: { screen: Stack2 },
        Single1: { screen: Single1 },
        Single2: { screen: Single2 },
    },
    {
        initialRouteName: 'Stack1',
    }
);

//drawer
const Drawer = createDrawerNavigator(
    {
        Stacks: { screen: Stack }, //なるほど、入れ子で呼び出せば・・
        Single1: { screen: Single1 },
        Single2: { screen: Single2 },
    },
    {
        initialRouteName: 'Stacks',
    }
);

export default function App() {
    //const Layout = createAppContainer(Stack);
    //const Layout = createAppContainer(Tab);
    const Layout = createAppContainer(Drawer);
    return (
        <React.Fragment>
            <Layout />
        </React.Fragment>
        // <View style={styles.container}>
        //     <Single1 />
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
