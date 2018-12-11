import { ORDER_DATA } from './actionTypes';
import { CHANGEREADYSTATE } from 'component/ScrollView/scrollViewActionsTypes.js';
import axios from 'axios';

export const getOrderData = (page)=> (dispatch) =>{
    dispatch({
        type: CHANGEREADYSTATE,
        obj: false
    });
    axios({
        method: 'get',
        url: '/json/orders.json',
    }).then((e)=>{
        dispatch({
            type: ORDER_DATA,
            currentPage: page, 
            obj: e.data
        });
        dispatch({
            type: CHANGEREADYSTATE,
            obj: true
        });
    });
}