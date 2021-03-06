import TopBar from "../component/TopBar";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClickMenu:function(_menu){
            dispatch({type:'MENU',mode_content:_menu});
        },
        onClickBasket:function(_basket){
            dispatch({type:'장바구니',mode_content:_basket});
        },
        onClickMyPage:function(_MyPage){
            dispatch({type:'MY PAGE',mode_content:_MyPage});
        }
    }
}

export default connect(null,mapDispatchToProps)(TopBar);