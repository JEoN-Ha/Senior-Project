import PaymentInfo from "../component/PaymentInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickCancle:function(){        
        }
    }
}

export default connect(null,mapDispatchToProps)(PaymentInfo);