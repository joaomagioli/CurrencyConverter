import React, { Component } from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import styles from './styles'

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode="contain"
                    source={require('./images/background.png')}
                    style={styles.containerImage}>
                    <Image
                        resizeMode="contain"
                        style={styles.logo}
                        source={require('./images/logo.png')} />
                </ImageBackground>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        )
    }
}
