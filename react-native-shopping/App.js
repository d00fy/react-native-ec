import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Single1 from './src/screens/Single1';
import Single2 from './src/screens/Single2';
import Top from './src/screens/Top';
import Stack2 from './src/screens/Stack2';

//----MemoApp
import BodyText from './src/elements/BodyText';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//stack
const Stack = createStackNavigator(
    {
        Top: { screen: Top },
        カート: { screen: Stack2 },
        注文履歴: { screen: Single1 },
        設定: { screen: Single2 },
    },
    {
        initialRouteName: 'Top',
    }
);

//drawer
const Drawer = createDrawerNavigator(
    {
        トップ: { screen: Stack }, //なるほど、入れ子で呼び出せば・・
        カート: { screen: Stack2 },
        注文履歴: { screen: Single1 },
        設定: { screen: Single2 },
    },
    {
        initialRouteName: 'トップ',
    }
);

export default function App() {
    //const Layout = createAppContainer(Stack);
    const Layout = createAppContainer(Drawer);
    return <Layout />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
