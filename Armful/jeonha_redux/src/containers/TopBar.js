import TopBar from "../component/TopBar";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick:function(_menu){
            dispatch({type:'MENU',mode_content:_menu});
        }
    }
}

export default connect(null,mapDispatchToProps)(TopBar);