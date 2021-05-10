import PaymentHistoryInfo from "../component/PaymentHistoryInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickCancle:function(){        
        }
    }
}

export default connect(null,mapDispatchToProps)(PaymentHistoryInfo);