import tabReducer from './tabReducer';
import categoryReducer from './categoryReducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
	tabReducer,
	categoryReducer
})

export default reducer;