import SignUpContent from "../component/SignUpContent";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClickCheck:function(_PW,_check){
            if(_PW === _check){
                dispatch({type:'PASSWORD_SAME',PW_state:true});
                alert('비밀번호가 일치합니다.');
            }
            else{
                dispatch({type:'PASSWORD_DIFF',PW_state:false});
                alert('비밀번호를 다시 입력해주세요.');
            } 
        },
        onClickSignUp:function (_name,_ID,_check,_phoneNum,_carNum) {
            if(_name !== null && _ID !== null && _check === true && _phoneNum !== null && _carNum !== null) {
                dispatch({type:'회원가입 완료', mode_content:'LOGIN'});
                alert('회원가입이 완료되었습니다.');
            }
            else if(_check === false){
               alert('비밀번호 확인을 해주세요.')
            }
            else{
                alert('입력하지 않은 항목이 있습니다. 모두 입력해주세요.');
            }           
        }
    }
}

export default connect(null,mapDispatchToProps)(SignUpContent);