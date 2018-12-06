import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class InputWithButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.buttonContainer}
                    onPress={this.props.onPress}>
                    <Text
                        style={styles.buttonText}>
                        {this.props.buttonText}
                    </Text>
                </TouchableHighlight>
                <View style={styles.border}></View>
                <TextInput style={styles.input}></TextInput>
            </View>
        )
    }
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
}