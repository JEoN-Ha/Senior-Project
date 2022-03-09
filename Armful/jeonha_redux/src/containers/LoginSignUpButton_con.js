import LoginSignUpButton from "../component/LoginSignUpButton";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClickLogin:function(_login){
            dispatch({type:'LOGIN',mode_content:_login});
        },
        onClickSignUp:function(_SignUp){
            dispatch({type:'회원가입',mode_content:_SignUp});
        }
    }
}

export default connect(null,mapDispatchToProps)(LoginSignUpButton);