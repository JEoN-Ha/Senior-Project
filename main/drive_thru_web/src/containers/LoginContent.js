import LoginContent from "../component/LoginContent";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(_ID,_PW,_login){
            if(_login === true){
                alert('로그인이 완료됐습니다.');
                dispatch({type:'LOGIN_CLICK',customer_id:_ID,PW:_PW,login:_login,mode_content:'welcome'});
            }
            else{
                alert('아이디 또는 패스워드가 일치하지 않습니다.');
                dispatch({type:'LOGIN',customer_id:null,PW:null,login:_login,mode_content:'LOGIN'});
            }
        }
    }
}

function mapReduxStateToReactProps() {
    return{
        mode:'readCustomer'
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(LoginContent);