import React, { Component } from 'react';
import styles from "./Component.css";

class Basket extends Component {
    render() {
      const basketStyle = {
        position : 'fixed',
        top : 400,
        left : 20
      }
      return (
        <header style={basketStyle}>
            <text className={styles.BasketTitle}>장바구니 {this.props.orderID}</text>
        </header>
      );
    }
  }

  export default Basket;