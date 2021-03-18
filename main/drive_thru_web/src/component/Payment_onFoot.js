import React, {Component} from 'react';
import BasketInfo from '../containers/BasketInfo';
import "./Component.css";
import store from '../store';

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
            basketData : [],
            userInfo : []
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
    };

    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked // true —- target.checked 속성을 이용해서 라디오 버튼이 선택되었는지 여부를 확인한다.
        this.setState({radioGroup: obj})
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
                console.log('Success!');
            } else if (res.status === 400) {
                // 실패시
                console.log('Failed!');
            }
            return res.json();
        })
            .then(data => {
                const userInfo = data.user;
                const getUserIsError = data.isError;
                const whatIsError = data.explainError;
                // let _userInfo = [];
                // _userInfo.push({
                //     UserWebId : userInfo[0].UserWebId,
                //     PhoneNum : userInfo[0].PhoneNum
                // })
                // console.log(_userInfo);
                this.setState({
                    // userInfo : _userInfo
                    userInfo : userInfo
                })
                console.log(this.state.userInfo[0].UserWebId);

                // 확인을 위한 console.log
                // if (getMenuIsError) {
                //     console.log(whatIsError);
                // }
            })
    }

    getFetch(_body){
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
            const userOrderNo = data.orderNo; // Front애서 배열로 OrderNo를 저장해야 함(결제 주문이 여러개일 수도 있으므로)
            // 확인을 위한 console.log
            console.log(orderIsError, userOrderNo);
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
            console.log(allBasketMenu);
            console.log(allBasket);
            const getMenuIsError = data.isError;
            const whatIsError = data.explainError;
            //this.state.basketData = allBasket;
            let _basketData = []
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
        const bodyOrder = JSON.stringify({
            userWebId: this.state.customer_id,
            carId: this.state.carNumber,
            payment: 1
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

                {/* DB에서 사용자 정보 불러오기 */}
               <h2>1. 주문 정보</h2>
                {/* <article className="OrderInfoTitle">
                    이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="name" placeholder={this.state.userInfo[0].UserWebId}
                        onChange={function (e) {
                            this.setState({name:e.target.value});
                            // this.props.onChangeName(this.state.name)                         
                        }.bind(this)}></input> <br></br>
                    연락처&nbsp;&nbsp;&nbsp;
                    <input type="text" name="phone" placeholder="전화번호를 입력하세요."
                        onChange={function (e) {
                            this.setState({phone:e.target.value});
                            // this.props.onChangePhone(this.state.phone)                          
                        }.bind(this)}></input> <br></br>
                </article> */}

                {/* DB에서 주문 정보 불러오기 */}
               <h2>2. 주문 메뉴 정보</h2>
               {mapToComponent(this.state.basketData)}

               <h2>3. 결제 수단</h2>
                <div className="OrderInfoTitle">{this.getTotalPrice(this.state.basketData)}원</div>
                <article className="OrderInfoTitle">
                    <h3>온라인 결제</h3>
                    <input type="radio" name="radioGroup" value="creditCard"
                        checked={this.state.radioGroup['creditCard']}
                        onChange={this.handleRadio}
                        ></input> 신용카드
                    <input type="radio" name="radioGroup" value="cellphone"
                        checked={this.state.radioGroup['cellphone']}
                        onChange={this.handleRadio}
                        ></input> 휴대폰 <br></br>
                    <input type="radio" name="radioGroup" value="kakaoPay"
                        checked={this.state.radioGroup['kakaoPay']}
                        onChange={this.handleRadio}
                        ></input> 카카오페이
                    <input type="radio" name="radioGroup" value="PAYCO"
                        checked={this.state.radioGroup['PAYCO']}
                        onChange={this.handleRadio}
                        ></input> PAYCO
                </article>
                
                {/* 결제 정보 DB로 보내기 */}
                <button style={btnStyle} onClick={function () {
                    this.props.Payment(this.state.name,this.state.phone);
                    this.getFetch(bodyOrder);                  
               }.bind(this)}>결제하기</button>
            </div>
        )
    }
}