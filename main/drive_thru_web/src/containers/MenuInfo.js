import MenuInfo from "../component/MenuInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickName:function(_name,_orderName,_id) {
            if(_name === _orderName){
                dispatch({type:'SELECT_CANSEL',orderName:'상품을 선택해주세요.'});
            }
            else {
                dispatch({type:'SELECT',orderName:_name,orderID:_id});
            }        
        }
    }
}

function mapReduxStateToReactProps(state) {
    return{
        orderCount:state.orderCount
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(MenuInfo);