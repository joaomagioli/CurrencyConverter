import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class Icon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const iconStyles = [styles.icon]
        if (this.props.visible) {
            iconStyles.push(styles.iconVisible)
        }

        if (this.props.iconBackground) {
            iconStyles.push({ backgroundColor: this.props.iconBackground });
        }

        return (
            <View style={iconStyles}>
                {this.props.checkmark ?
                    <Image style={styles.checkIcon}
                        resizeMode="contain"
                        source={require('./images/check.png')}>
                    </Image> : null}
            </View>
        )
    }
}

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string
}