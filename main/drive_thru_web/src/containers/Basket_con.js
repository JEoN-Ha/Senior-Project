import Basket from "../component/Basket";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){ 
    return {
        BasketMoreClick:function (_mode) {
            dispatch({type:'BASKET MORE',mode_content:_mode})           
        },
        PaymentClick:function () {
            dispatch({type:'PAYMENT',mode_content:'customerType'})        
        },
        zeroTotal:function () {
            alert('장바구니에 담긴 내역이 없습니다.')
            dispatch({type:'NO BASKET',mode_content:'MENU'})        
        }
    }
}
export default connect(null,mapDispatchToProps)(Basket);