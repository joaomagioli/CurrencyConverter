import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={styles.button}>
                    <Image
                        resizeMode='contain'
                        style={styles.icon}
                        source={require('./images/gear.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

Header.propTypes = {
    onPress: PropTypes.func
}
