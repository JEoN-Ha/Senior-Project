import React, {Component} from 'react';
import BasketInfo from '../containers/BasketInfo';
import store from '../store';
import "./Component.css";

export default class Basket extends Component {
    state = {
        mode_content:store.getState().mode_content,
        customer_id:store.getState().customer_id,
        jeonhaUrl:store.getState().jeonhaUrl,
        isLoading: false,
        basketData : [{id:null, nameKorea:null, price:null, count:null}]
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

    componentDidMount() {
        const bodygetBasket = JSON.stringify({
            userWebId: this.state.customer_id,
        })
        this.getBasketData(bodygetBasket);
    };
    
    getBasketData = (_body) => {
        fetch(this.state.jeonhaUrl + '/getBasket', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body:_body,
            
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
            const allBasket = data.basket;
            let allBasketMenu = [];
            allBasketMenu = data.menu;
            //console.log(allBasketMenu);
            const getMenuIsError = data.isError;
            const whatIsError = data.explainError;
            //this.state.basketData = allBasket;
            // let _basketData = [{id:null, nameKorea:null, price:null, count:null, menuNo:null}]
            let _basketData = [];
            for (let i = 0; i < allBasket.length; i++) {
                _basketData.push({
                    id: allBasket[i].BasketId,
                    nameKorea: allBasketMenu[i].FoodNameKor,
                    price: allBasketMenu[i].Price,
                    count: allBasket[i].BasketMenuCount,
                    menuNo: allBasketMenu[i].MenuNo
                })
            }
            this.setState({
            basketData: _basketData,
            isLoading: true
            });

            console.log(this.state.basketData);
            //this.state.basketData = 
            // 확인을 위한 console.log
            // if (getMenuIsError) {
            //     console.log(whatIsError);
            // }
        })
    }

    getTotalPrice(_basketdata){
        let totalPrice = 0;
        for (let i=0; i<_basketdata.length; i++){
            totalPrice = totalPrice + _basketdata[i].count*_basketdata[i].price;
        }
        return totalPrice
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
                return (
                <BasketInfo basket={basket} key={i}
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
        // const bodygetBasket = JSON.stringify({
        //     userWebId: this.state.customer_id,
        // })
        return (
            <div>
                <h2>주문 메뉴 정보</h2>
                {mapToComponent(this.state.basketData)}
               <button style={btnStyle} onClick={function () {
                    this.props.BasketMoreClick(this.state.mode_content)                   
               }.bind(this)}>메뉴 더 담으러 가기</button>

               <h2>결제 금액</h2>
               <article className="OrderInfoTitle">{this.getTotalPrice(this.state.basketData)}원</article>
               <button style={btnStyle2} onClick={function () {
                    this.props.PaymentClick()                   
               }.bind(this)}>결제하기</button>
            </div>
        )
    }
}