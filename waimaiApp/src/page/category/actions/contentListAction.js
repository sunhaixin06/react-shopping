import { GET_LIST_DATA } from './actionTypes';
import axios from 'axios';

export const getListData = (obj)=> async (dispatch, getState) =>{
    dispatch({
        type: 'SETLOADSTATE',
        obj: false
    });
    let url = '/json/homelist.json';
    if (obj.filterData || getState().contentListReducer.filterData) {
        url = '/json/listparams.json';
    }
    let e = await axios({
        method: 'get',
        url: url
    })
    dispatch({
        type: GET_LIST_DATA,
        filterData: obj.filterData,
        toFirstPage: obj.toFirstPage,
        obj: e.data
    })
    dispatch({
        type: 'SETLOADSTATE',
        obj: true
    });
}