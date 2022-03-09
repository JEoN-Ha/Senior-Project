import React, {Component} from 'react';
import "./Component.css";

export default class MyPage extends Component {

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

    render() {
        const btnStyle = {
            color: "white",
            background: "#815854",
            margin: "20px",
            padding: "2px",
            border: "1px solid #815854",
            borderRadius: ".25rem",
            fontSize: "1rem",
            lineHeight: 5,
            width: "200px"
          }

        return (
            <div className="SelectType">
                <button style={btnStyle} onClick={function () {
                    this.props.MyInfoClick()                   
               }.bind(this)}>내 정보</button>
               <button style={btnStyle} onClick={function () {
                    this.props.PaymentClick()                   
               }.bind(this)}>결제 내역</button>
            </div>
        )
    }
}