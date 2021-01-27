import Basket from "../component/Basket";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){ 
    return {
        BasketMoreClick:function (_mode) {
            dispatch({type:'BASKET MORE',mode_content:_mode})           
        },
        PaymentClick:function () {
            dispatch({type:'PAYMENT',mode_content:'customerType'})        
        }
    }
}
export default connect(null,mapDispatchToProps)(Basket);