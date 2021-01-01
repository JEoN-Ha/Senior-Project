import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined){    // 최초 실행일 경우
        return {
            ID:null, PW:null, 
            mode:'login',
            mode_content:'welcome',
            // orderData:[{id:null,count:null}]
            orderName:'상품을 선택해주세요.', orderCount:0
        }
    }
    if(action.type === 'LOGIN') {
        return {...state, ID:action.ID, PW:action.PW, mode:'readCustomer'}    //...state는 이전 state를 복사
    }
    if(action.type === 'LOGOUT') {
        return {...state, ID:action.ID, PW:action.PW, mode:'login'}
    }
    if(action.type === 'MENU') {
        return {...state, mode_content:'MENU'}  
    }
    if(action.type === 'SELECT') {
        return {...state, orderName:action.orderName, orderCount:0}
    }
    if(action.type === 'SELECT_CANSEL') {
        return {...state, orderName:action.orderName, orderCount:0}
    }
    if(action.type === 'INCREMENT') {
        return {...state, orderCount: state.orderCount + 1}
    }
    if(action.type === 'DECREMENT') {
        return {...state, orderCount: state.orderCount - 1}
    }

    return state; // 기본적으로 state를 리턴하게 됨
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())