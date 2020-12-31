import React, { Component } from 'react';
import store from '../store';

class MenuInfo extends Component {
    state = {
        orderName:store.getState().orderName
    }
  constructor(props){
    super(props);
    store.subscribe(function () {
        this.setState({orderName:store.getState().orderName,
            count:store.getState().orderCount}
        );           
    }.bind(this));
    // this.onIncrease = this.onIncrease.bind(this);
  };

//   onIncrease = () => {
//     const countResult = this.state.count + 1;
//     this.setState({
//       count: countResult
//     });
//     this.props.getCount(countResult,this.state.id);
//   };
//   onDecrease = () => {
//     const countResult = this.state.count - 1;
//     this.setState({
//       count: countResult
//     });
//     this.props.getCount(countResult,this.state.id);
//   };
//   // handleChange =(event) => {
//   //   this.setState({order: event.target.checked});
//   // };

    render() {
      return (
          <div>
            <span onClick={function(e) {
              this.props.onClick(e.target.innerText, this.state.orderName)
            }.bind(this)}>{this.props.menu.nameKorea}</span><br/>
            <span>{this.props.menu.nameEnglish}</span><br/>
            <span>{this.props.menu.price}</span><br/>

            {/* 체크 여부 확인은 event.target.ch */}
            {/* <span>{this.state.count} </span>
            <button onClick={this.onDecrease}>-1</button>&nbsp;
            <button onClick={this.onIncrease}>+1</button> */}
            <hr/>
          </div>
      );
    }
  }

  export default MenuInfo;