import React, {Component} from 'react';
import store from '../store';
import "./Component.css";

export default class Basket extends Component {
    constructor(props) {
        super(props)
        this.handleRadio = this.handleRadio.bind(this)
        this.state = {
            name:null, phone:null, carNumber:null,
            radioGroup: {
                creditCard: true, cellphone: false,
                kakaoPay: false, PAYCO: false
            }
        }
    }

    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked // true —- target.checked 속성을 이용해서 라디오 버튼이 선택되었는지 여부를 확인한다.
        this.setState({radioGroup: obj})
    }

    render() {
        // const paymentStyle = {
        //     position: 'relative',
        //     top: 150,
        //     left: 30
        //   }
        return (
            <div>

                {/* DB에서 사용자 정보 불러오기 */}
               <h2>1. 주문 정보</h2>
                <article className="OrderInfoTitle">
                    이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" name="name" placeholder="이름을 입력하세요."
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
                    차량번호<input type="text" name="carNumber" placeholder="차량번호를 입력하세요."
                        onChange={function (e) {
                            this.setState({carNumber:e.target.value});
                            // this.props.onChangeCarNumber(this.state.carNumber)                          
                        }.bind(this)}></input>
                </article>

                {/* DB에서 주문 정보 불러오기 */}
               <h2>2. 주문 메뉴 정보</h2>
                <article className="OrderInfoTitle">
                    <article>아메리카노 1개</article>
                </article>

               <h2>3. 결제 수단</h2>
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
                <button onClick={function () {
                    this.props.Payment(this.state.name,this.state.phone,this.state.carNumber)                   
               }.bind(this)}>결제하기</button>
            </div>
        )
    }
}