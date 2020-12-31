import Basket from "../component/Basket";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return{
        orderName:state.orderName,
        orderCount:state.orderCount
    }    
}

function mapDispatchToProps(dispatch){
    
    return {
        onClickPlus:function () {
            dispatch({type:'INCREMENT'})            
        },
        onClickMinus:function () {
            dispatch({type:'DECREMENT'})            
        }
    }
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(Basket);