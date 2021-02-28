import React, { Component } from 'react';
import "./Component.css";
import store from '../store';

const jeonhaUrl = 'http://localhost:4000';

class Basket extends Component {
  state = {
    orderCount:store.getState().orderCount,
    orderName:store.getState().orderName,
    customer_id:store.getState().customer_id,
    orderID:store.getState().orderID}
  constructor(props){
  super(props);
  store.subscribe(function () {
      this.setState({orderCount:store.getState().orderCount});           
  }.bind(this));
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getFetch(_body){
    fetch(jeonhaUrl + '/insertIntoBasket', {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: _body
    }).then(res => {
      if (res.status === 200) {
          // 정상 작동
          console.log('Success!');
      } else if (res.status === 400) {
          // 실패시
          console.log('Failed!');
      }
      return res.json();
    })
    .then(data => {
      const getMenuIsError = data.isError;
      const whatIsError = data.explainError;
  
      // 확인을 위한 console.log
      // if (getMenuIsError) {
      //     console.log(whatIsError);
      // }
    })
  }

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
    const bodyInsertIntoBasket = JSON.stringify({
      userWebId: this.state.customer_id,
      menuNo: this.state.orderID,
      menuCount: this.state.orderCount
    })
    return (
      <div>
          {/* 선택 상품 개수 정하기 */}
          <text>{this.state.orderCount}개</text>&nbsp;
          <button style={btnStyle} onClick={function(){this.props.onClickPlus()
            }.bind(this)}>+1</button>&nbsp;
          <button style={btnStyle} onClick={function(){this.props.onClickMinus(this.state.orderCount)
            }.bind(this)}>-1</button>

          {/* 장바구니에 담기 */}
          <button style={btnStyle2} onClick={
            function () {this.props.BasketClick(this.state.orderCount);
            this.getFetch(bodyInsertIntoBasket);
            }.bind(this)}>장바구니 담기</button>
      </div>
    );      
  }
  }

  export default Basket;