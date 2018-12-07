import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class ClearButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    onPress={this.props.onPress}>
                    <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={require('./images/icon.png')} />
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

ClearButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
}
