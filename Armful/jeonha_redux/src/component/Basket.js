import React, { Component } from 'react';
import "./Component.css";

class Basket extends Component {
    render() {
      const basketStyle = {
        Position : 'fixed',
        Top : 2000,
        right : 20
      }
      return (
        <article>
            <text style={basketStyle}>장바구니 {this.props.orderID}</text>
        </article>
      );
    }
  }

  export default Basket;