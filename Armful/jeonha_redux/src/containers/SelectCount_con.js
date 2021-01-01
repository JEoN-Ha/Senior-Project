import SelectCount from "../component/SelectCount";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickPlus:function () {
            dispatch({type:'INCREMENT'})            
        },
        onClickMinus:function () {
            dispatch({type:'DECREMENT'})            
        }
    }
}

export default connect(null,mapDispatchToProps)(SelectCount);