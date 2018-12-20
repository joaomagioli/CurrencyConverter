import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from '../config/sagas'
import reducer from '../reducers'

const sagaMiddleWare = createSagaMiddleWare()
const middleware = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware))

sagaMiddleWare.run(rootSaga)

export default store;
