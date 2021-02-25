import React, {Component} from 'react';
import "./Component.css";

export default class PaymentHistory extends Component {

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

                {/* DB에서 결제 내역 불러오기 */}
               <h2>결제 내역</h2>

            </div>
        )
    }
}