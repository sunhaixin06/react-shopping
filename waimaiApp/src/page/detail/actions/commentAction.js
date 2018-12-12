import { COMMENT_LIST_DATA } from "./actionTypes";
import axios from "axios";

export const getListData = () => async (dispatch) =>{
    dispatch({
        type: 'SETLOADSTATE',
        obj: false
    })
    
    let e = await axios({
        method: 'get',
        url: '/json/comments.json'
    })

    dispatch({
        type: COMMENT_LIST_DATA,
        obj: e.data
    })

    dispatch({
        type: 'SETLOADSTATE',
        obj: false
    })
}