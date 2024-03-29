import { HEAD_DATA } from './actionTypes';
import axios from 'axios';

export const getHeaderData = ()=> async (dispatch) =>{
    let e = await axios({
        // method: 'get',
        // url: '/json/head.json',
        method: 'post',
        url: 'http://localhost:3000/api',
        data: {
            url: 'http://i.waimai.meituan.com/ajax/v7/home/head',
            parmas: {
                not_need_primary_filter: false,
                userid: 280770501
            }
        }
    })
    dispatch({
        type: HEAD_DATA,
        obj: e.data
    });
}