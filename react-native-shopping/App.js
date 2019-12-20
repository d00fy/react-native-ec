import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Single1 from './src/screens/Single1';
import Single2 from './src/screens/Single2';
import Stack1 from './src/screens/Stack1';
import Stack2 from './src/screens/Stack2';
import Tab1 from './src/screens/Tab1';
import Tab2 from './src/screens/Tab2';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

//stack
const Stack = createStackNavigator(
    {
        Stack1: { screen: Stack1 },
        Stack2: { screen: Stack2 },
    },
    {
        initialRouteName: 'Stack1',
    }
);

Tab;
const Tab = createBottomTabNavigator({
    Tab1: { screen: Tab1 },
    Tab2: { screen: Tab2 },
    // Tab1: { screen: Stack },
    // Tab2: { screen: createStackNavigator({ Tab2: { screen: Tab2 } }) },
});

//drawer
const Drawer = createDrawerNavigator(
    {
        Stacks: { screen: Stack },
        Tabs: { screen: Tab },
        Single1: { screen: Single1 },
        Single2: { screen: Single2 },
    },
    {
        initialRouteName: 'Tabs',
    }
);

export default function App() {
    // const Layout = createAppContainer(AppNavigator);
    // const Layout = createAppContainer(Tab);
    const Layout = createAppContainer(Drawer);
    return (
        <Layout />
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
