import Payment_drive from "../component/Payment_drive";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){ 
    return {
        Payment:function (_name,_phone,_carNumber) {
            if((_name !== null) && (_phone !== null) && (_carNumber !== null)){
                dispatch({type:'PAYMENT_CLICK',mode_content:'welcome'})
                alert('결제가 완료되었습니다.')
            }
            else {
                alert('정보를 모두 입력해주세요.')
            }
                    
        }
    }
}
export default connect(null,mapDispatchToProps)(Payment_drive);