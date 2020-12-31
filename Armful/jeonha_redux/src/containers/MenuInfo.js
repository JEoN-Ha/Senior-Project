import MenuInfo from "../component/MenuInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClick:function(_name,_orderName) {
            if(_name === _orderName){
                dispatch({type:'SELECT_CANSEL',orderName:'상품을 선택해주세요.'});
            }
            else {
                dispatch({type:'SELECT',orderName:_name});
            }        
        }
    }
}

export default connect(null,mapDispatchToProps)(MenuInfo);