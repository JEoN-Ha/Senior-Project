import LoginContent from "../component/LogoutContent";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(){
            dispatch({type:'LOGOUT',ID:null,PW:null});
        }
    }
}

function mapReduxStateToReactProps() {
    return{
        mode:'login'
    }    
}

export default connect(mapReduxStateToReactProps,mapDispatchToProps)(LoginContent);