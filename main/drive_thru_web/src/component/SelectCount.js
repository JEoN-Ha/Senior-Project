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
      const btnStyle = {
        color: "white",
        background: "#815854",
        margin: "3px",
        padding: "2px",
        border: "1px solid #815854",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        width: "40px"
      }
      const btnStyle2 = {
        color: "white",
        background: "#815854",
        margin: "3px",
        padding: "2px",
        border: "1px solid #815854",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        width: "150px"
      }
      return (
        <div>
            {/* 선택 상품 개수 정하기 */}
            <text>{this.state.orderCount}개</text>&nbsp;
            <button style={btnStyle} onClick={function(){this.props.onClickPlus()
              }.bind(this)}>+1</button>&nbsp;
            <button style={btnStyle} onClick={function(){this.props.onClickMinus(this.state.orderCount)
              }.bind(this)}>-1</button>

            {/* 장바구니에 담기 */}
            <button style={btnStyle2} onClick={function () {this.props.BasketClick(this.state.orderCount)              
              }.bind(this)}>장바구니 담기</button>
        </div>
      );      
    }
  }

  export default Basket;