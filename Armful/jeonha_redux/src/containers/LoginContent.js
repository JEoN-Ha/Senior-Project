import LoginContent from "../component/LoginContent";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(_ID,_PW){
            dispatch({type:'LOGIN',ID:_ID,_PW:_PW});
        }
    }
}

export default connect(null,mapDispatchToProps)(LoginContent);