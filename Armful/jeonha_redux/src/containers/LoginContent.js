import LoginContent from "../component/LoginContent";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(_ID,_PW){
            dispatch({type:'LOGIN',ID:_ID,PW:_PW});
        }
    }
}

function mapReduxStateToReactProps() {
    return{
        mode:'readCustomer'
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(LoginContent);