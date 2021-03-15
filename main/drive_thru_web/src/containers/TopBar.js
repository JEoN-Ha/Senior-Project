import TopBar from "../component/TopBar";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClickMenu:function(_menu){
            dispatch({type:'MENU',mode_content:_menu});
        },
        onClickBasket:function(_basket, _mode){
            if (_mode === 'readCustomer'){
                dispatch({type:'장바구니',mode_content:_basket});
            }
            else {
                alert('로그인이 필요합니다.')
            }
        },
        onClickMyPage:function(_MyPage,_mode){
            if (_mode === 'readCustomer'){
                dispatch({type:'MY PAGE',mode_content:_MyPage});
            }
            else {
                alert('로그인이 필요합니다.')
            }
        }
    }
}

export default connect(null,mapDispatchToProps)(TopBar);