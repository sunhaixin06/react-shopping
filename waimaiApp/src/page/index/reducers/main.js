import tabReducer from './tabReducer';
import { combineReducers } from 'redux';
import orderReducer from './orderReducer.js';
import categoryReducer from './categoryReducer';
import { routerReducer } from 'react-router-redux';
import contentListReducer from './contentListReducer.js';
import scrollViewReducer from 'component/ScrollView/scrollViewReducer.js';

const reducers = combineReducers({
	scrollViewReducer,
	tabReducer,
	categoryReducer,
	contentListReducer,
	orderReducer,
    router: routerReducer
})

export default reducers;