import Basket from "../component/Basket";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return{
        orderName:state.orderName
    }    
}

export default connect(mapReduxStateToReactProps)(Basket);