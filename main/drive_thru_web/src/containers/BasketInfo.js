import BasketInfo from "../component/BasketInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickDelete:function(){       
            dispatch({type:'BASKET DELETE', Basket_Delete:true})
            alert('삭제되었습니다. 메뉴 선택 창으로 이동합니다. ')
        },

        basketNull:function(count){
            if(count === null) {
                alert('장바구니에 담긴 내역이 없습니다.')
            dispatch({type:'NO BASKET',mode_content:'MENU'})
            }
              
        }
    }
}

export default connect(null,mapDispatchToProps)(BasketInfo);