import React from 'react'
import Home from './screens/Home'
import Options from './screens/Options'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $white: '#FFFFFF'
})

export default () => <Options />