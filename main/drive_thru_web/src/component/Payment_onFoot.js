import React, {Component} from 'react';
import BasketInfo from '../containers/BasketInfo';
import "./Component.css";
import store from '../store';
import e from 'cors';

export default class Payment_onFoot extends Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.state = {
            customer_id:store.getState().customer_id,
            name:null, phone:null, carNumber:null,
            jeonhaUrl:store.getState().jeonhaUrl,
            radioGroup: {
                creditCard: true, cellphone: false,
                kakaoPay: false, PAYCO: false
            },
            basketData : [{id:null, nameKorea:null, price:null, count:null}],
            userInfo : [{
                UserName:null, PhoneNum:null
            }],
            payment : 1,
            lastOrderNo : null
        }  
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        const bodygetBasket = JSON.stringify({
            userWebId: this.state.customer_id,
        })
        this.getBasketData(bodygetBasket);
        this.getUserInfo(bodygetBasket);
        this.getLastOrderNo();
    };

    getLastOrderNo = () => {    // 가장 마지막 OrderNo를 불러옴
        fetch(this.state.jeonhaUrl + '/getLastOrderNo')
        .then(res => {
            if (res.status === 200) {
                // 정상 작동
                console.log('OrderNo Success!');
            } else if (res.status === 400) {
                // 실패시
                console.log('Failed!');
            }
            return res.json();
        }).then(data => {
            this.state.lastOrderNo = data.orderNo;
            console.log(this.state.lastOrderNo);
            const getUserIsError = data.isError;
            const whatIsError = data.explainError;
        })
    }

    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked // true —- target.checked 속성을 이용해서 라디오 버튼이 선택되었는지 여부를 확인한다.
        this.setState({radioGroup: obj});
    }

    getUserInfo = (_body) => {
        fetch(this.state.jeonhaUrl + '/getUserInfo', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: _body
        }).then(res => {
            if (res.status === 200) {
                // 정상 작동
                console.log('UserInfo Success!');
            } else if (res.status === 400) {
                // 실패시
                console.log('Failed!');
            }
            return res.json();
        }).then(data => {
            const userInfoData = data.user;
            const getUserIsError = data.isError;
            const whatIsError = data.explainError;
            let _userInfo = [];
            _userInfo.push({
                UserName : userInfoData[0].UserName,
                PhoneNum : userInfoData[0].PhoneNum
            })
            this.setState({
                userInfo : _userInfo
            })
            // 확인을 위한 console.log
            // if (getMenuIsError) {
            //     console.log(whatIsError);
            // }
        })
    }

    getOrder(_body){
        fetch(this.state.jeonhaUrl + '/order', {
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
        }).then(data => {
            const orderIsError = data.isError;
            //const userOrderNo = data.orderNo; // Front애서 배열로 OrderNo를 저장해야 함(결제 주문이 여러개일 수도 있으므로)
            // 확인을 위한 console.log
            console.log(orderIsError);
        }) 
    }

   deleteBasket = (_body) => {
    fetch(this.state.jeonhaUrl + '/updateBasketState', {
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
    }).then(data => {
        const orderIsError = data.isError;
        //const userOrderNo = data.orderNo; // Front애서 배열로 OrderNo를 저장해야 함(결제 주문이 여러개일 수도 있으므로)
        // 확인을 위한 console.log
        console.log(orderIsError);
    })
   }

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
            const allBasketMenu = data.menu;
            const getMenuIsError = data.isError;
            const whatIsError = data.explainError;
            this.state.basketData = allBasket;
            let _basketData = [];
            for (let i = 0; i < allBasket.length; i++) {
            _basketData.push({
                id: allBasket[i].BasketId,
                nameKorea: allBasketMenu[i].FoodNameKor,
                price: allBasketMenu[i].Price,
                count: allBasket[i].BasketMenuCount
            })
            }
            this.setState({
            basketData: _basketData,
            isLoading: true
            })
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
            width: "100px"
        }
        let bodyOrder = JSON.stringify({
            orderNo: this.state.lastOrderNo + 1,
            userWebId: this.state.customer_id,
            carId: this.state.carNumber,
            payment: this.state.payment
        });
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
        return (
            <div>
               <h2>1. 주문 정보</h2>
                <article className="OrderInfoTitle">
                    이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="name" placeholder={this.state.userInfo[0].UserName}
                        onChange={function (e) {
                            this.setState({name:e.target.value});                       
                        }.bind(this)}></input> <br></br>
                    연락처&nbsp;&nbsp;&nbsp;
                    <input type="text" name="phone" placeholder={this.state.userInfo[0].PhoneNum}
                        onChange={function (e) {
                            this.setState({phone:e.target.value});                  
                        }.bind(this)}></input> <br></br>
                </article>

               <h2>2. 주문 메뉴 정보</h2>
               {mapToComponent(this.state.basketData)}

               <h2>3. 결제 수단</h2>
                <div className="OrderInfoTitle">{this.getTotalPrice(this.state.basketData)}원</div>
                <article className="OrderInfoTitle">
                    <h3>온라인 결제</h3>
                    <input type="radio" name="radioGroup" value="creditCard"
                        checked={this.state.radioGroup['creditCard']}
                        onChange={function (e) {this.handleRadio(e); this.state.payment = 1;}.bind(this)}
                        ></input> 신용카드
                    <input type="radio" name="radioGroup" value="cellphone"
                        checked={this.state.radioGroup['cellphone']}
                        onChange={function (e) {this.handleRadio(e); this.state.payment = 2;}.bind(this)}
                        ></input> 휴대폰 <br></br>
                    <input type="radio" name="radioGroup" value="kakaoPay"
                        checked={this.state.radioGroup['kakaoPay']}
                        onChange={function (e) {this.handleRadio(e); this.state.payment = 3;}.bind(this)}
                        ></input> 카카오페이
                    <input type="radio" name="radioGroup" value="PAYCO"
                        checked={this.state.radioGroup['PAYCO']}
                        onChange={function (e) {this.handleRadio(e); this.state.payment = 4;}.bind(this)}
                        ></input> PAYCO
                </article>
                
                {/* 결제 정보 DB로 보내기 */}
                <button style={btnStyle} onClick={function () {
                    this.props.Payment();
                    this.getOrder(bodyOrder);
                    this.deleteBasket(bodyOrder);                
               }.bind(this)}>결제하기</button>
            </div>
        )
    }
}