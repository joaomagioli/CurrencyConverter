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
        const textColorStyle = [styles.buttonText]

        if (this.props.textColor) {
            textColorStyle.push({ color: this.props.textColor })
        }

        if (this.props.editable === false) {
            containerStyle.push(styles.containerDisabled)
        }

        return (
            <View style={containerStyle}>
                <TouchableHighlight
                    style={styles.buttonContainer}
                    onPress={this.props.onPress}>
                    <Text
                        style={textColorStyle}>
                        {this.props.buttonText}
                    </Text>
                </TouchableHighlight>
                <View style={styles.border}></View>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    keyboardType={this.props.keyboardType}
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
    onPress: PropTypes.func,
    keyboardType: PropTypes.string,
    onChangeText: PropTypes.func,
    textColor: PropTypes.string
}
