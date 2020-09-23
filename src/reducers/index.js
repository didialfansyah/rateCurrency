import { combineReducers } from 'redux'

import getExchangeReducer from './getExchangeReducer';
import getBuyReducer from './getBuyReducer';
import getSellReducer from './getSellReducer';

const rootReducer = combineReducers({
    exchange : getExchangeReducer,
    buy : getBuyReducer,
    sell : getSellReducer
})

export default rootReducer;