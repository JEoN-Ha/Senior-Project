import DisplayNumber from "../Component/DisplayNumber";
import {connect} from 'react-redux';

export default connect()(DisplayNumber);    // 아래의 모든 코드를 하지 않고 컴포넌트를 Return함

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