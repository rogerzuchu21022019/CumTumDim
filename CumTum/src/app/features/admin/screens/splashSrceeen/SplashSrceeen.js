import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Router from '../../../../navigation/Router';
import stylesplashSrceeen from './StyleSplashSrceeen'
const SplashSrceeen = (props) => {
    const { navigation } = props;
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace(Router.LOGIN);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <View style={stylesplashSrceeen.container}>
            <View style={stylesplashSrceeen.header}></View>
            <View style={stylesplashSrceeen.body}>
                <Image
                    style={stylesplashSrceeen.imageBody}
                    source={require('../../../../../../src/assets/image/logo.png')}
                />
            </View>
            <View style={stylesplashSrceeen.footers}></View>


        </View>
    )
}

export default SplashSrceeen