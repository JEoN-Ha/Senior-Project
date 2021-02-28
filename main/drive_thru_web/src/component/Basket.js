import React, {Component} from 'react';
import BasketInfo from '../containers/BasketInfo';
import store from '../store';
import "./Component.css";

const jeonhaUrl = 'http://localhost:4000';

export default class Basket extends Component {
    state = {
        mode_content:store.getState().mode_content,
        customer_id:store.getState().customer_id,
        basketData : [  // DB 연결 후 null로 바꾸기
            {
                id : 1,
                nameKorea : '아메리카노',
                count : 1,
                price : '4,400'
            },
            {
                id : 2,
                nameKorea : '돌체 블랙 밀크티',
                count : 2,
                price : '10,600'
            }
        ]
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
    
    getFetch(_body){
        fetch(jeonhaUrl + '/getBasket', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: _body,
            
        }).then(res => {
            if (res.status === 200) {
                // 정상 작동
                console.log('Success!');
            } else if (res.status === 400) {
                // 실패시
                console.log('Failed!');
            }
            return res.json();
        }).then(data => {
            const getMenuIsError = data.isError;
            const whatIsError = data.explainError;
            //this.state.basketData = 
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
        const mapToComponent = data => {
            return data.map((basket, i) => {
                return (<BasketInfo basket={basket} key={i}
                  getCount = {function(_count,_id){
                    let i = 0;
                    let data = Array.from(this.state.basketData);
                    while(i < data.length){
                        if(data[i].id === _id){
                            data[i].count = _count;
                            break;
                        }
                        i = i + 1;
                    }
                    this.setState({
                        basketData:data
                    });
                  }.bind(this)}
                  ></BasketInfo>);
            });
        }; 
        const bodygetBasket = JSON.stringify({
            userWebId: this.state.customer_id,
        })
        return (
            <div>
                <h2>주문 메뉴 정보</h2>
                {/* DB로부터 장바구니 내역 가져오기 */}
                {this.getFetch(bodygetBasket)}
                {/* 장바구니 내역 그리기 */}
                {mapToComponent(this.state.basketData)}
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