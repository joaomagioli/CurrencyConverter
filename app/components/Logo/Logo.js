import React, { Component } from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class Logo extends Component {

    static propTypes = {
        tintColor: PropTypes.string,
    }

    render() {
        const imageStyles = [
            styles.logo,
            this.props.tintColor ? { tintColor: this.props.tintColor } : null
        ]

        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode="contain"
                    source={require('./images/background.png')}
                    style={styles.containerImage}>
                    <Image
                        resizeMode="contain"
                        style={imageStyles}
                        source={require('./images/logo.png')} />
                </ImageBackground>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        )
    }
}
