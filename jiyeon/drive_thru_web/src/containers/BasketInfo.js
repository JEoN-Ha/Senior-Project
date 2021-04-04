import BasketInfo from "../component/BasketInfo";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickDelete:function(){        
        }
    }
}

export default connect(null,mapDispatchToProps)(BasketInfo);