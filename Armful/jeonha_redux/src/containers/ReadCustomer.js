import ReadCustomer from "../component/ReadCustomer";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(){
            dispatch({type:'LOGOUT',ID:null,PW:null});
        }
    }
}

function mapReduxStateToReactProps(state) {
    return{
        ID:state.ID
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(ReadCustomer);