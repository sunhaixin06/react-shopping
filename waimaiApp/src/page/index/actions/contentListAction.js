import { LIST_DATA } from './actionTypes';
import { CHANGEREADYSTATE } from 'component/ScrollView/scrollViewActionsTypes.js';
import axios from 'axios';

export const getListData = (page)=> async (dispatch) =>{
    dispatch({
        type: CHANGEREADYSTATE,
        obj: false
    });
    let e = await axios({
        method: 'get',
        url: '/json/homelist.json'
    })
    window.setTimeout(()=>{
        dispatch({
            type: LIST_DATA,
            currentPage: page, 
            obj: e.data
        });

        dispatch({
            type: CHANGEREADYSTATE,
            obj: true
        });

    },1500);
}