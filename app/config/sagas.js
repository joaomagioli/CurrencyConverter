import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies'
import { takeEvery } from 'redux-saga/effects'

const fetchLatestConversionRates = function* (action) {
    yield
    //TODO Update things
}
const rootSaga = function* () {
    // if any of these actions get called, call fetchLatestConversionRates
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates)
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates)
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates)

}

export default rootSaga
