import React, { Component } from 'react'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class InputWithButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const containerStyle = [styles.container]
        if (this.props.editable === false) {
            containerStyle.push(styles.containerDisabled)
        }

        return (
            <View style={containerStyle}>
                <TouchableHighlight
                    style={styles.buttonContainer}
                    onChangeText={this.props.onChangeText}>
                    <Text
                        style={styles.buttonText}>
                        {this.props.buttonText}
                    </Text>
                </TouchableHighlight>
                <View style={styles.border}></View>
                <TextInput
                    style={styles.input}
                    editable={this.props.editable} >
                    {this.props.defaultValue}
                </TextInput>
            </View>
        )
    }
}

InputWithButton.propTypes = {
    buttonText: PropTypes.string,
    defaultValue: PropTypes.string,
    editable: PropTypes.bool,
    onChangeText: PropTypes.func
}