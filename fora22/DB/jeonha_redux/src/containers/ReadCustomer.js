import ReadCustomer from "../component/ReadCustomer";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return{
        ID:state.ID
    }    
}

export default connect(mapReduxStateToReactProps)(ReadCustomer);