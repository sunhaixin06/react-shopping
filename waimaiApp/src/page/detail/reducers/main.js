import tabReducer from './tabReducer';
import menuReducer from './menuReducer';
import commentReducer from './commentReducer';
import restanurantReducer from './restanurantReducer';
import scrollViewReducer from 'component/ScrollView/scrollViewReducer';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    scrollViewReducer,
    tabReducer,
    menuReducer,
    commentReducer,
    restanurantReducer,
});

export default reducers;