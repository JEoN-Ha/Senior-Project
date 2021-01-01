import SelectCount from "../component/SelectCount";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickPlus:function () {
            dispatch({type:'INCREMENT'})            
        },
        onClickMinus:function () {
            dispatch({type:'DECREMENT'})            
        },
        BasketClick:function (_count) {
            if(_count !== 0 ){
                dispatch({type:'BASKET'})
            }
            else {
                alert('상품 개수를 입력해주세요.')
            }
                       
        }
    }
}

export default connect(null,mapDispatchToProps)(SelectCount);