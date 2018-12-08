import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'
import moment from 'moment'

export default class LastConverted extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Text style={styles.smallText}>
                1 {this.props.base} = {this.props.conversionRate} {this.props.quote} as of {moment(this.props.date).format('MMMM D, YYYY')}
            </Text>
        )
    }
}

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number
}
