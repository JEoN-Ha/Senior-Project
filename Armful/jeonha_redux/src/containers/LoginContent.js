import LoginContent from "../component/LoginContent";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(_ID,_PW){
            dispatch({type:'LOGIN_CLICK',ID:_ID,PW:_PW,mode_content:'welcome'});
        }
    }
}

function mapReduxStateToReactProps() {
    return{
        mode:'readCustomer'
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(LoginContent);