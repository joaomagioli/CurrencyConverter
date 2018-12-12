import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StatusBar, Platform, Linking } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ListItem, Separator } from '../components/List'

const ICON_COLOR = '#868686'
const ICON_SIZE = 23
const ICON_PREFIX = Platform.OS == 'ios' ? 'ios' : 'md'
const FIXER_IO_URL = 'http://fixer.io'

export default class Options extends Component {

    static propTypes = {
        navigation: PropTypes.object
    }

    handleThemesPress = () => {
        this.props.navigation.navigate('Themes')
    }

    handleSitePress = () => {
        Linking.openURL(FIXER_IO_URL).catch(() => alert('An error ocurried'))
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"></StatusBar>
                <ListItem
                    text="Themes"
                    onPress={this.handleThemesPress}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`}
                        color={ICON_COLOR}
                        size={ICON_SIZE} />} />
                <Separator />
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                    customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />} />
            </ScrollView>
        )
    }
}
