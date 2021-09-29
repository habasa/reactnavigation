/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const TestScreen = ({navigation}) => {
    return (
        <View>
            <Text>Test Page</Text>
            <Button
                title="To Home Screen"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default TestScreen;