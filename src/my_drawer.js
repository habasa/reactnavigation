/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text, Button, StyleSheet } from 'react-native';

class SideDrawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 80
    }
})

export default SideDrawer;