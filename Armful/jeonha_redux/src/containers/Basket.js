import Basket from "../component/Basket";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return{
        orderID:state.orderID
    }    
}

export default connect(mapReduxStateToReactProps)(Basket);