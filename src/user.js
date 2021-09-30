/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class UserScreen extends Component {

    headerStyle = () => {
        this.props.navigation.setOptions(
          {
                    title: 'Customizing',
                    headerStyle: {
                        backgroundColor: 'purple'
                    },
                    headerTintColor: 'yellow',
                    headerTintStyle: {
                      fontWeight: 'bold',
                      color: 'white'
                    },
                    headerBackTitle: 'Back',
                    headerRight: () => (
                        <Button 
                            title= "Go Home"
                            onPress={() => {
                                this.props.navigation.navigate('Home')
                            }}
                        />
                    )
                }
        )
    }

    render() {
        this.headerStyle()
        const {params} = this.props.route;
        const userIdx = params ? params.userIdx : null;
        const userName = params ? params.userName : null;
        const userLastName = params ? params.userLastName : null;
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>User Screen</Text>
                <Button 
                    title="To Home Screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                />

                {/* home screen에서 보내준 데이터를 화면에 보여줌. */}
                <Text>User Idx: {JSON.stringify(userIdx)}</Text>
                <Text>User Name: {JSON.stringify(userName)}</Text>
                <Text>User LastName: {JSON.stringify(userLastName)}</Text>
            </View>
        )
    }
}

export default UserScreen;