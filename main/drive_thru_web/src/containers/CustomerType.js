import CustomerType from "../component/CustomerType";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){ 
    return {
        DriveClick:function () {
            dispatch({type:'Drive-Thru',mode_content:'payment',customerType:'Drive-Thru'})           
        },
        OnFootClick:function () {
            dispatch({type:'On Foot',mode_content:'payment',customerType:'OnFoot'})        
        }
    }
}
export default connect(null,mapDispatchToProps)(CustomerType);