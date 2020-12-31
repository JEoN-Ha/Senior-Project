import React, { Component } from 'react';
import "./Component.css";
import store from '../store';

class Basket extends Component {
  state = {orderCount:store.getState().orderCount}
  constructor(props){
  super(props);
  store.subscribe(function () {
      this.setState({orderCount:store.getState().orderCount});           
  }.bind(this));
  };
    render() {
      const basketStyle = {
        position : 'fixed',
        top : 500,
        left : 20
      }
      return (
        <header style={basketStyle}>
          <div className="BasketTitle">
            <text>선택상품 {this.props.orderName}</text>&nbsp;
            <text>{this.state.orderCount}개</text>&nbsp;
            <button onClick={function(){
              this.props.onClickPlus()
            }.bind(this)}>+1</button>&nbsp;
            <button onClick={function(){
              this.props.onClickMinus()
            }.bind(this)}>-1</button>
          </div>
            
        </header>
      );
    }
  }

  export default Basket;