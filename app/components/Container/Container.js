import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

export default class Container extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        )
    }
}

Container.propTypes = {
    children: PropTypes.any,
}
