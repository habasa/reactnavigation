/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text, Button, StyleSheet, Image } from 'react-native';

class TabMessageScreen extends Component {
    render () {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Message Screen</Text>
            </View>
        )
    }
}

export default TabMessageScreen;