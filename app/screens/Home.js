import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'
import { changeCurrencyAmount, swapCurrency, getInitialConversion } from '../actions/currencies';
import { connect } from 'react-redux'
import { connectAlert } from '../components/Alert'

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
        primaryColor: PropTypes.string,
        alertWithType: PropTypes.func,
        currencyError: PropTypes.string
    }

    componentWillMount() {
        this.props.dispatch(getInitialConversion())
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currencyError && nextProps.currencyError != this.props.currencyError) {
            this.props.alertWithType('error', 'Error', nextProps.currencyError)
        }
    }

    handleChangeText = (text) => {
        this.props.dispatch(changeCurrencyAmount(text))
    }

    handlePressSwapCurrency = () => {
        this.props.dispatch(swapCurrency())
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' })
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' })
    }

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options')
    }

    render() {

        let quotePrice = '...'

        if (!this.props.isFetching) {
            quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)
        }

        return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior="padding">
                    <Logo tintColor={this.props.primaryColor} />
                    <InputWithButton
                        keyboardType={'numeric'}
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        onChangeText={this.handleChangeText}
                        textColor={this.props.primaryColor} />
                    <InputWithButton
                        keyboardType={'numeric'}
                        editable={false}
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        defaultValue={quotePrice}
                        textColor={this.props.primaryColor} />
                    <LastConverted
                        date={this.props.lastConvertedDate}
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate} />
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
    const primaryColor = state.themes.primaryColor

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        primaryColor,
        currencyError: state.currencies.error
    }
}

export default connect(mapStateToProps)(connectAlert(Home))
