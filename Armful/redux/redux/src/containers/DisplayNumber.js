import DisplayNumber from "../Component/DisplayNumber";
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) { // state 값이 변경될 때마다 호출
    return{
        number:state.number     // 아래 코드의 state 초기화,store.subscribe부터 return까지의 코드 내용을 담고 있음
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);    // 아래의 모든 코드를 하지 않고 컴포넌트를 Return함

// import React,{Component} from "react";
// import { compose } from "redux";
// import store from '../store';

// export default class extends Component{
//     state = {number:store.getState().number}    // number 값을 store에서 가져와서 기본 세팅
//     constructor(props){
//         super(props);
//         store.subscribe(function(){     // store로부터 state가 변경됐다고 통보받음
//             this.setState({number:store.getState().number});
//         }.bind(this));
//     }
//     render(){
//         return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
//     }
// }