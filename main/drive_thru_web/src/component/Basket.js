import React, {Component} from 'react';
import store from '../store';
import "./Component.css";

export default class Basket extends Component {
    state = {
        mode_content:store.getState().mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
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
            width: "200px"
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
            width: "100px"
          }
        return (
            <div>
                {/* DB에서 장바구니 내역 불러오기 */}
               <h2>주문 메뉴 정보</h2>
               <article className="OrderInfoTitle">아메리카노 1개</article>
               <button style={btnStyle} onClick={function () {
                    this.props.BasketMoreClick(this.state.mode_content)                   
               }.bind(this)}>메뉴 더 담으러 가기</button>

               {/* DB에서 총 결제 금액 불러오기 */}
               <h2>결제 금액</h2>
               <article className="OrderInfoTitle">4400원</article>
               <button style={btnStyle2} onClick={function () {
                    this.props.PaymentClick()                   
               }.bind(this)}>결제하기</button>
            </div>
        )
    }
}