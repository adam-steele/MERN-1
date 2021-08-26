import * as API from '../api/index'
import { AUTH } from '../constants/actionTypes';
//import Auth from "../React-components/Auth/Auth";


export const signup =(formData, history)=> async (dispatch)=>{
    try {
        history.push('/');

       const {data} = API.signUp(formData);
       dispatch({type:AUTH, data});
        //history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signin =(formData, history)=> async (dispatch)=>{
    try {
        history.push('/');

        const {data} = API.signIn(formData);
       dispatch({type:AUTH, data});
        //history.push('/');
    } catch (error) {
        console.log(error);
    }
}