import MenuInfo from "../component/MenuInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onChange:function(_checked,_id){
            if(_checked === true){
                dispatch({type:'CHECK',orderID:_id});  // count가 무조건 null되는 문제점
            }
            else {
                dispatch({type:'UNCHECK',orderID:null});
            }
            
        },
        onClick:function(_name) {
            dispatch({type:'SELECT',orderID:_name});           
        }
    }
}

export default connect(null,mapDispatchToProps)(MenuInfo);