import ReadCustomer from "../component/ReadCustomer";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(){
            dispatch({type:'LOGOUT',customer_id:null,PW:null,mode_content:'welcome'});
        }
    }
}

function mapReduxStateToReactProps(state) {
    return{
        customer_id:state.customer_id
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(ReadCustomer);