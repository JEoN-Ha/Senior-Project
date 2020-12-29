import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined){    // 최초 실행일 경우
        return {
            ID:null, PW:null, 
            mode:'login',
            mode_content:'welcome'
        }
    }
    if(action.type === 'LOGIN') {
        return {...state, ID:action.ID, PW:action.PW, mode:'readCustomer'}    //...state는 이전 state를 복사
    }
    if(action.type === 'LOGOUT'){
        return {...state, ID:action.ID, PW:action.PW, mode:'login'}
    }
    if(action.type === 'MENU') {
        return {...state, mode_content:'MENU'}    //...state는 이전 state를 복사
    }
    return state; // 기본적으로 state를 리턴하게 됨
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())