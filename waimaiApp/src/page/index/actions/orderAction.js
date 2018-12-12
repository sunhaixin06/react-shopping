import { ORDER_DATA } from './actionTypes';
import { CHANGEREADYSTATE } from 'component/ScrollView/scrollViewActionsTypes.js';
import axios from 'axios';

export const getOrderData = (page)=> async (dispatch) =>{
    dispatch({
        type: CHANGEREADYSTATE,
        obj: false
    });
    let e = await axios({
        method: 'get',
        url: '/json/orders.json',
    })
    dispatch({
        type: ORDER_DATA,
        currentPage: page, 
        obj: e.data
    });
    dispatch({
        type: CHANGEREADYSTATE,
        obj: true
    });
}