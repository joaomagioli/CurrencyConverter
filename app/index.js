import React from 'react'
import Home from './screens/Home'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F'
})

export default () => <Home />