import React, { Component } from 'react';
import "./Component.css";
import store from '../store';
import SelectCount_con from '../containers/SelectCount_con';

class BasketButton extends Component {
  state = {
    orderCount:store.getState().orderCount,
    orderName:store.getState().orderName
  }
  constructor(props){
  super(props);
  store.subscribe(function () {
      this.setState({
        orderCount:store.getState().orderCount,
        orderName:store.getState().orderName
      });           
  }.bind(this));
  };

  getCount(){   // 상품을 선택한 경우에만 개수 정하는 버튼 등장
    let _article = null;
    if(this.props.orderName !== '상품을 선택해주세요.'){
      _article = <SelectCount_con></SelectCount_con>
    }
    return _article
  }

    render() {
      return (
        <header>
          <div className="BasketTitle">

            {/* 선택 상품의 이름 */}
            <text>선택상품 : {this.props.orderName}</text>&nbsp;

            {/* 선택 상품의 개수 */}
            {this.getCount()}
          </div>
            
        </header>
      );
    }
  }

  export default BasketButton;