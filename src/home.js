/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Home Screen</Text>
                <Button 
                    title="To User Screen"
                    // user screen으로 이 데이터들을 보내라 params 사용
                    onPress={() => {
                        this.props.navigation.navigate('User', {
                            userIdx: 100,
                            userName: 'Sungjin',
                            userLastName: 'Kim'
                        })
                    }}
                />
                <Button 
                    title="Change the title"
                    onPress={()=>{
                        this.props.navigation.setOptions({
                            title: 'Changed!',
                            headerStyle: {
                                backgroundColor: 'pink'
                            },
                            headerTintColor: 'red'
                        })
                    }}
                />
            </View>
        )
    }
}

export default HomeScreen;

// onPress={() => {
//     this.props.navigation.navigate('User')
// }}
// 스크린의 이름값 name 값을 입력해줘야함 => User