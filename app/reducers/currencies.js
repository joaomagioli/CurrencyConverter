import {
    SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT,
    swapCurrency, changeCurrencyAmount
} from '../actions/currencies'

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {
                // spread operator que recupera o estado anterior e passa ao novo objeto
                ...state,
                amount: action.amount || 0
            }
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.baseCurrency,
                quoteCurrency: state.quoteCurrency
            }
        default: return state
    }
}

console.log('initial State', initialState)
console.log('swap currency', reducer(initialState, swapCurrency()))
console.log('change currency amount', reducer(initialState, changeCurrencyAmount(222)))

export default reducer