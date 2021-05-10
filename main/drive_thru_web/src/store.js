import { act } from 'react-dom/test-utils';
import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined){    // 최초 실행일 경우
        return {
            customer_id:null, PW:null, 
            mode:'login',mode_content:'welcome',
            PW_state:false,
            orderName:'상품을 선택해주세요.', orderCount:0,orderID:null,
            customerType:null, isCarNumberDisabled:null,
            jeonhaUrl: 'https://jeonha-server.azurewebsites.net',
            ID_Success:null, PW_Success:null,
            Basket_Delete:false,
            menuAllData : [{id:null,nameKorea:null,nameEnglish:null,price:null}]
        }
    }

    // 로그인
    if(action.type === 'LOGIN') {
        return {...state, mode_content:'LOGIN'}    //...state는 이전 state를 복사
    }
    if(action.type === 'LOGIN_CLICK') {
        return {...state, customer_id:action.customer_id, PW:action.PW, mode:'readCustomer', mode_content:'MENU'}    //...state는 이전 state를 복사
    }
    if(action.type === 'LOGOUT') {
        return {...state, customer_id:action.customer_id, PW:action.PW, mode:'login', mode_content:'welcome'}
    }

    // 회원가입
    if(action.type === '회원가입') {
        return {...state, mode_content:'회원가입'}    //...state는 이전 state를 복사
    }
    if(action.type === 'PASSWORD_SAME') {
        return {...state, PW_state:true}    //...state는 이전 state를 복사
    }
    if(action.type === 'PASSWORD_DIFF') {
        return {...state, PW_state:false}    //...state는 이전 state를 복사
    }
    if(action.type === '회원가입 완료') {
        return {...state, mode_content:'LOGIN'}    //...state는 이전 state를 복사
    }

    // MENU
    if(action.type === 'MENU') {
        return {...state, mode_content:'MENU'}  
    }
    if(action.type === 'SELECT') {
        return {...state, orderName:action.orderName, orderCount:0, orderID:action.orderID}
    }
    if(action.type === 'SELECT_CANSEL') {
        return {...state, orderName:action.orderName, orderCount:0, orderID:null}
    }
    if(action.type === 'INCREMENT') {
        return {...state, orderCount: state.orderCount + 1}
    }
    if(action.type === 'DECREMENT') {
        return {...state, orderCount: state.orderCount - 1}
    }
    if(action.type === 'BASKET_CLICK') {
        return {...state, orderName:'상품을 선택해주세요.'}   //DB에 넘겨주고 orderCount와 orderName을 null로 만들기
    }
    if(action.type === 'MENU SAVE') {
        return {...state, menuAllData:action.menuAllData}   //DB에 넘겨주고 orderCount와 orderName을 null로 만들기
    }

    // 장바구니
    if(action.type === '장바구니') {
        return {...state, mode_content:'장바구니'}  
    }
    if(action.type === 'BASKET MORE') {
        return {...state, mode_content:'MENU'}  
    }
    if(action.type === 'PAYMENT') {
        return {...state, mode_content:'customerType'}  
    }
    if(action.type === 'Drive-Thru') {
        return {...state, mode_content:'payment',customerType:'Drive-Thru',isCarNumberDisabled:'false'}  
    }
    if(action.type === 'On Foot') {
        return {...state, mode_content:'payment',customerType:'OnFoot',isCarNumberDisabled:'true'}  
    }
    if(action.type === 'PAYMENT_CLICK') {
        return {...state, mode_content:'welcome'}  
    }
    if(action.type === 'BASKET DELETE') {
        return {...state, Basket_Delete:true, mode_content:'MENU'}  
    }
    if(action.type === 'BASKET DELET') {
        return {...state, Basket_Delete:true, mode_content:'장바구니'}  
    }
    if(action.type === 'NO BASKET') {
        return {...state, mode_content:'MENU'}  
    }

    // 마이페이지
    if(action.type === 'MY PAGE') {
        return {...state, mode_content:'MY PAGE'}  
    }
    if(action.type === 'MyInfo') {
        return {...state, mode_content:'MyInfo'}  
    }
    if(action.type === 'Payment History') {
        return {...state, mode_content:'Payment_History'}  
    }
    return state; // 기본적으로 state를 리턴하게 됨
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())