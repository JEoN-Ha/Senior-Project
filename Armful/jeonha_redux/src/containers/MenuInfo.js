import MenuInfo from "../component/MenuInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onChange:function(_checked,_id){
            if(_checked === true){
                dispatch({type:'CHECK',orderData:[{id:_id, count:null}]});  // count가 무조건 null되는 문제점 발생
            }
            
        }
    }
}

function mapReduxStateToReactProps() {
    return{
        mode:'readCustomer'
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(MenuInfo);