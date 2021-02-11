import React, {Component} from 'react';
import "./Component.css";

export default class Payment_onFoot extends Component {
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

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked // true —- target.checked 속성을 이용해서 라디오 버튼이 선택되었는지 여부를 확인한다.
        this.setState({radioGroup: obj})
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
                <button style={btnStyle} onClick={function () {
                    this.props.Payment(this.state.name,this.state.phone)                   
               }.bind(this)}>결제하기</button>
            </div>
        )
    }
}