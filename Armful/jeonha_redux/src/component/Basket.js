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

    render() {
        const basketStyle = {
            position: 'fixed',
            top: 150,
            left: 30
          }
        return (
            <div style={basketStyle}>
               <h2>주문 메뉴 정보</h2>
               {/* DB에서 장바구니 내역 불러오기 */}
               <article className="OrderInfoTitle">아메리카노 1개</article>
               <button onClick={function () {
                    this.props.BasketMoreClick(this.state.mode_content)                   
               }.bind(this)}>메뉴 더 담으러 가기</button> 
            </div>
        )
    }
}