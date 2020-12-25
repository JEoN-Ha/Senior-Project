import AddNumber from "../Component/AddNumber";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){      //React의 Props로 전달
    return {
        onClick:function(_size){
            dispatch({type:'INCREMENT', size:_size});
        }
    }
}

export default connect(null,mapDispatchToProps)(AddNumber);   //상태를 전달하는 인자는 없으므로 null

// import React,{Component} from "react";
// import { compose } from "redux";
// import store from '../store';

// export default class extends Component{
//     render(){
//         return <AddNumber onClick={function(_size){
//             store.dispatch({type:'INCREMENT', size:_size});
//         }.bind(this)}></AddNumber>
//     }
// }

// containers : react와 일하는 친구는 얘, 컴포넌트들을 재사용할 수 있도록 함
// AddNumber : presentation만 하고 다시 원래의 역할로 돌아감