import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

export default class Container extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const containerStyles = [styles.container]

        if (this.props.backgroundColor) {
            containerStyles.push({ backgroundColor: this.props.backgroundColor })
        }

        return (
            <View style={containerStyles}>
                {this.props.children}
            </View>
        )
    }
}

Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string
}
