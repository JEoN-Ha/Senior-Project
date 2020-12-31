import React, { Component } from 'react';
import "./Component.css";

class Basket extends Component {
    render() {
      const basketStyle = {
        position : 'fixed',
        top : 450,
        left : 20
      }
      return (
        <header style={basketStyle}>
            <text className="BasketTitle">선택상품 {this.props.orderName}</text>
        </header>
      );
    }
  }

  export default Basket;