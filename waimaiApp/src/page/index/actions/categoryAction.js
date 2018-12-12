import { HEAD_DATA } from './actionTypes';
import axios from 'axios';

export const getHeaderData = ()=> async (dispatch) =>{
    let e = await axios({
        method: 'get',
        url: '/json/head.json',
    })
    dispatch({
        type: HEAD_DATA,
        obj: e.data
    });
}