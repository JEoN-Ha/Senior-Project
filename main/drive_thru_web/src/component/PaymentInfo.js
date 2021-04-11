import React, { Component } from 'react';
import store from '../store';

class BasketInfo extends Component {
    state = {
        customer_id:store.getState().customer_id,
        jeonhaUrl:store.getState().jeonhaUrl}

    componentWillUnmount() {
    console.log('componentWillUnmount');
    }

    onClickCancle(_body){
        fetch(this.state.jeonhaUrl + '/cancelOrder', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: _body
        })
            .then(res => {
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
                const cancelIsError = data.isError;
                // 확인을 위한 console.log
                console.log(cancelIsError);
            })
    }

    render() {
        const bodyCancelOrder = JSON.stringify({
            orderNo: this.props.payment.orderNo
        });
        console.log(this.props.payment.orderNo)
        return (
            <div>
                <hr/>
                <span>{this.props.payment.nameKorea}</span><br/>
                <span>{this.props.payment.count}개</span><br/>
                <span>{this.props.payment.price * this.props.payment.count}원</span><br/>
                <input type="button" value="취소하기" onClick={function(e) {
                 this.onClickCancle(bodyCancelOrder)
                }.bind(this)}></input>
                <hr/>
            </div>
        );
    }
  }

  export default BasketInfo;