/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import TestScreen from './src/test';

const stack = createNativeStackNavigator();
// screen and navigator property return ㅎㅐ줌.
// stack.screen 콤퍼넌트에 다 props로 내려준다 자동으로. 하위 컴포넌트에서 사용가능.

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
          <stack.Screen
            name="Home"
            component={HomeScreen} 
            options={{title: 'Con-Fin'}} // 헤더바 변경
            />
          {/* 홈루트 */}
          <stack.Screen
            name="User"
            component={UserScreen}
            initialParams={{
              userIdx: 10,
              userName: 'Sungjin',
              userLastName: 'Jin'
            }}
          //   options={{
          //     title: 'User',
          //     // 초기 설정 가능 데이터 초기 설정 가능한것과 똑같다.
          //     headerStyle: {
          //         backgroundColor: 'green'
          //     },
          //     headerTintColor: 'yellow',
          //     headerTintStyle: {
          //       fontWeight: 'bold',
          //       color: 'purple'
          //     }
          // }}
          />
          {/* 유저루트 및 초기값 설정 */}

          {/* <stack.Screen name="Test" component={TestScreen} /> */}
        </stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;

// 데이터를 보내는걸 네이티브에서는 파라미터를 루트로 패싱한다라고 말한다.