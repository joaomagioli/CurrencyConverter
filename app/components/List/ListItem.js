import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Icon from './Icon'
import PropTypes from 'prop-types'
import styles from './styles'

export default class ListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableHighlight onPress={this.props.handlePress} underlayColor={styles.$underlayColo}>
                <View style={styles.row} >
                    <Text style={styles.text}>{this.props.text}</Text>
                    {this.props.selected ?
                        <Icon
                            checkmark={this.props.checkmark = true}
                            visible={this.propsvisible = true} /> :
                        <Icon />}
                </View>
            </TouchableHighlight>
        )
    }
}

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool
}