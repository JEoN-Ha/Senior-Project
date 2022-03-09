import Menu from "../component/Menu";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){ 
    return {
        menuSave:function (data) {
            dispatch({type:'MENU SAVE',menuAllData:data})           
        }
    }
}
export default connect(null,mapDispatchToProps)(Menu);