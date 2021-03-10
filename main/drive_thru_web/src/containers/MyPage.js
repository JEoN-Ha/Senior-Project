import MyPage from "../component/MyPage";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){ 
    return {
        MyInfoClick:function () {
            dispatch({type:'MyInfo',mode_content:'MyInfo'})           
        },
        PaymentClick:function () {
            dispatch({type:'Payment History',mode_content:'Payment_History'})        
        }
    }
}
export default connect(null,mapDispatchToProps)(MyPage);