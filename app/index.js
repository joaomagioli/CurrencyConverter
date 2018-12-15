import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Navigator from './config/routes'
import { AlertProvider } from './components/Alert'
import './reducers'

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F'
})

export default () => <AlertProvider><Navigator /></AlertProvider>
