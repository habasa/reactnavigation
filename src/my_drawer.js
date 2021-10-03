/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DrawerLogo from './assets/pics/home.png'
import {CommonActions} from '@react-navigation/native'

class SideDrawer extends Component {

    navigateToScreen = (route) => () => {
        // arrow function 두번쓰는거 왜그런지 확인하기.
        // https://www.google.com/search?q=%EC%B9%B4%EB%A0%88%ED%95%A8%EC%88%98&sxsrf=AOaemvJtUc-gcYJFUrwijjGRF02Km-GMbQ%3A1633184999123&ei=52xYYfv1Bo3l0ATF5aGIAQ&ved=0ahUKEwi7head-KvzAhWNMpQKHcVyCBEQ4dUDCA4&uact=5&oq=%EC%B9%B4%EB%A0%88%ED%95%A8%EC%88%98&gs_lcp=Cgdnd3Mtd2l6EAM6CAgAEIAEELEDOgUIABCABDoLCAAQgAQQsQMQgwFKBAhBGABQ2wtY5hFguRRoAnAAeAKAAZABiAHICZIBAzAuOZgBAKABAcABAQ&sclient=gws-wiz
        this.props.navigation.dispatch(
            CommonActions.navigate({
                name: route,
                // params:
            })
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={DrawerLogo}
                                style={{width: 40, height: 40}}
                            />
                        </View>
                        <Text style={styles.sectionHeading}>Section 1</Text>
                        <View style={styles.navSectionStyle}>

                            <Text 
                            style={styles.navItemStyle}
                            onPress={this.navigateToScreen('Home')}
                            >Home</Text>

                            <Text 
                            style={styles.navItemStyle}
                            onPress={() => this.props.navigation.navigate('User')}
                            >User</Text>

                            <Text 
                            style={styles.navItemStyle}
                            onPress={() => alert('help!')}
                            >Help</Text>

                            <Text 
                            style={styles.navItemStyle}
                            onPress={() => alert('Info')}
                            >Info</Text>

                        </View>
                    </View>
                </ScrollView>
                <View style={{paddingLeft: 10, paddingBottom: 30}}>
                    <Text>Copyright @ confin, 2021.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingBottom: 50
    },
    imageContainer: {
        alignItems: 'center'   ,
        paddingBottom: 20  
    },
    sectionHeading: {
        color: '#fff',
        backgroundColor: '#ef9de4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },
    navSectionStyle: {
        backgroundColor: '#04b6ff'
    },
    navItemStyle: {
        padding: 10,
        color: '#fff'
    }
})

export default SideDrawer;

// scrollView 위아래로 땡기면 스크롤처럼 슉슉 이동됨.