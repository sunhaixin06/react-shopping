import { CHANGE_TAB, GET_FILTER_DATA, CHANGE_FILTER } from './actionTypes';
import axios from 'axios';

export const changeTab = (obj)=> (dispatch) =>{
    dispatch({
        type: CHANGE_TAB,
        obj: obj
    })

}
export const getFilterData = ()=> async (dispatch) =>{
    let e = await axios({
        url: '/json/filter.json',
        method: 'get'
    })
    dispatch({
        type: GET_FILTER_DATA,
        obj: e.data
    })
}
export const changeFilter = (obj)=> (dispatch) =>{
    dispatch({
        type: CHANGE_FILTER,
        obj: obj
    })

    dispatch({
        type: CHANGE_TAB,
        obj: {
            closePanel: true
        }
    })
}
