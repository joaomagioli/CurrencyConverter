import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'
import { changeCurrencyAmount, swapCurrency } from '../actions/currencies';
import { connect } from 'react-redux'

const TEMP_CONVERSION_RATE = 0.7974
const TEMP_CONVERSION_DATE = new Date()

//PAREI COM 12:25 DO VÍDEO

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        lastConvertedDate: PropTypes.object,
        isFetching: PropTypes.bool,
    }

    handleChangeText = (text) => {
        this.props.dispatch(changeCurrencyAmount(text))
    }

    handlePressSwapCurrency = () => {
        this.props.dispatch(swapCurrency())
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' })
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' })
    }

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options')
    }

    render() {

        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)

        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior="padding">
                    <Logo />
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType='numeric'
                        onChangeText={this.handleChangeText} />
                    <InputWithButton
                        editable={false}
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        defaultValue={quotePrice} />
                    <LastConverted
                        date={TEMP_CONVERSION_DATE}
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={TEMP_CONVERSION_RATE} />
                    <ClearButton
                        onPress={this.handlePressSwapCurrency}
                        text='Revert Currencies' />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {

    const baseCurrency = state.currencies.baseCurrency
    const quoteCurrency = state.currencies.quoteCurrency
    const conversionSelector = state.currencies.conversions[baseCurrency] || {}
    const rates = conversionSelector.rates || {}

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0
    }
}

export default connect(mapStateToProps)(Home)
