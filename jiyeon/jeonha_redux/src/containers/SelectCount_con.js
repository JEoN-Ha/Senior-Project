import SelectCount from "../component/SelectCount";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    
    return {
        onClickPlus:function () {
            dispatch({type:'INCREMENT'})            
        },
        onClickMinus:function (_count) {
            if(_count === 0){
                // 0이하로 빼기 금지
            }
            else {
                dispatch({type:'DECREMENT'}) 
            }           
        },
        BasketClick:function (_count) {
            if(_count !== 0 ){
                dispatch({type:'BASKET_CLICK'})
            }
            else {
                alert('상품 개수를 입력해주세요.')
            }
                       
        }
    }
}

export default connect(null,mapDispatchToProps)(SelectCount);