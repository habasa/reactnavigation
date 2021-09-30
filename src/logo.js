/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {ComponentType} from 'react';
import { Image } from 'react-native';
import Logos from './assets/pics/home.png'

const Logo = () => {
    return (
        <Image
            style= {{width: 40, height: 40}}
            source= {Logos}
        />
    );
};

export default Logo;