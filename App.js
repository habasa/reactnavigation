/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // stack사용시
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'; // drawer사용시
import HomeScreen from './src/home';
import UserScreen from './src/user';
import TestScreen from './src/test';

import DrawerHomeScreen from './src/home_drawer'
import DrawerUserScreen from './src/user_drawer'
import Logo from './src/logo';
import Picture from './src/assets/pics/home.png'
import SdieDrawer from './src/my_drawer'

const stack = createNativeStackNavigator();
// stack 사용시 (Stack으로 쓰자 대문자로..)
// screen and navigator property return ㅎㅐ줌.
// stack.screen 콤퍼넌트에 다 props로 내려준다 자동으로. 하위 컴포넌트에서 사용가능.

const Drawer = createDrawerNavigator();
// drawer 사용시
// https://reactnavigation.org/docs/drawer-navigator#installation

// CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('http://www.google.com')}
//         icon={() => <LogoTitle />}
//       />
//     </DrawerContentScrollView>
//   )
// }

// LogoTitle = () => {
//   return (
//     <Image
//       style={{ width: 40, height: 40 }}
//       source={require('./src/assets/pics/home.png')}
//     />
//   )
// }

class App extends Component {


  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="home"
          screenOptions={{
            drawerType: 'front',
            drawerPosition: 'right',
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: 200,
            }
          }}
          // drawerContent={(props) => <CustomDrawerContent {...props} />}
          drawerContent={(props) => <SdieDrawer {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={DrawerHomeScreen}
            options={{
              drawerIcon: () => (
                <Image
                  source={Picture}
                  style={{ width: 40, height: 40 }}
                />
              )
            }}
          />
          <Drawer.Screen name="User" component={DrawerUserScreen} />
        </Drawer.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <stack.Navigator 
      //   initialRouteName="Home"

      //   // 모든 스타일에 공통으로 스타일을 적용시킬수 있다. (screenOptions)
      //   // 공통적으로 옵션을 지정해도 각 스크린별로 수정이 가능하다.
      //     screenOptions={{
      //         headerStyle: {
      //             backgroundColor: 'pink'
      //         },
      //         headerTintColor: 'gold',
      //         headerTintStyle: {
      //           fontWeight: 'bold',
      //           color: 'brown'
      //         },
      //         headerTitle: () => (
      //           <Image style={{width: 40, height: 40}}
      //           source={require('./src/assets/pics/home.png')}
      //           />
      //         )
      //     }}
      //   >
      //     <stack.Screen
      //       name="Home"
      //       component={HomeScreen} 
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: () => (
      //           <Image style={{width: 40, height: 40}}
      //           source={require('./src/assets/pics/home.png')}
      //           />
      //         ),
      //         // header right 부분에 버튼 생성해주기
      //         headerRight: () => (
      //           <Button
      //           title= 'Info'
      //           onPress={() => {
      //             alert('hello!')
      //           }}
      //           />
      //         )
      //       }} // 헤더바 변경
      //       />
      //     {/* 홈루트 */}
      //     <stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{
      //         userIdx: 10,
      //         userName: 'Sungjin',
      //         userLastName: 'Jin'
      //       }}
      //       options={{
      //         title: 'User',
      //         // 초기 설정 가능 데이터 초기 설정 가능한것과 똑같다.
      //         headerStyle: {
      //             backgroundColor: 'green'
      //         },
      //         headerTintColor: 'yellow',
      //         headerTintStyle: {
      //           fontWeight: 'bold',
      //           color: 'purple'
      //         },
      //     }}
      //     />
      //     {/* 유저루트 및 초기값 설정 */}

      //     {/* <stack.Screen name="Test" component={TestScreen} /> */}
      //   </stack.Navigator>
      // </NavigationContainer>
      //stack 예제
    )
  }
}

export default App;

// 데이터를 보내는걸 네이티브에서는 파라미터를 루트로 패싱한다라고 말한다.
// https://reactnavigation.org/docs/native-stack-navigator#options