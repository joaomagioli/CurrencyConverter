import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'

export default class Home extends Component {

    handlePressBaseCurrency = () => {
        console.log('Press base')
    }

    handlePressQuoteCurrency = () => {
        console.log('Press quote')
    }

    handlePressSwapCurrency = () => {
        console.log('Press revert concurrencies')
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    editable={true}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType='numeric' />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    editable={false}
                    defaultValue={TEMP_QUOTE_PRICE}
                    keyboardType='numeric' />
                <ClearButton
                    text='Revert Currencies'
                    onPress={this.handlePressSwapCurrency} />
            </Container>
        )
    }
}
