import React, { Component } from 'react';

class List extends Component {
    render() {
      return (
        <nav>
          <ul>
            <li><a href="1.html">메뉴판</a></li>
            <li><a href="2.html">주문내역</a></li>
            <li><a href="3.html">장바구니</a></li>
            <li><a href="4.html">쿠폰</a></li>
          </ul>
        </nav>
      );
    }
  }

  export default List;