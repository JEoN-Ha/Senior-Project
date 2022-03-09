import Payment_drive from "../component/Payment_drive";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){ 
    return {
        Payment:function () {
            dispatch({type:'PAYMENT_CLICK',mode_content:'welcome'})
            alert('결제가 완료되었습니다.')       
        }
    }
}
export default connect(null,mapDispatchToProps)(Payment_drive);