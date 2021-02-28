import React, { Component } from 'react';
import store from '../store';

const jeonhaUrl = 'http://localhost:4000';

class BasketInfo extends Component {
    state = {orderName:store.getState().orderName,
    customer_id:store.getState().customer_id}
    constructor(props){
    super(props);
    store.subscribe(function () {
        this.setState({orderName:store.getState().orderName}
        );           
    }.bind(this));
    };

    componentWillUnmount() {
    console.log('componentWillUnmount');
    }

    onClickDelete(_body){
        fetch(jeonhaUrl + '/updateFromBasket', {
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
            const getMenuIsError = data.isError;
            const whatIsError = data.explainError;
    
            // 확인을 위한 console.log
            // if (getMenuIsError) {
            //     console.log(whatIsError);
            // }
        })
    }

    render() {
        const bodyDeleteFromBasket = JSON.stringify({
            userWebId: this.state.customer_id,
            menuNo: this.props.basket.id,
            menuCount: this.props.basket.count
        })
        return (
            <div>
                <hr/>
                <span>{this.props.basket.nameKorea}</span><br/>
                <span>{this.props.basket.count}개</span><br/>
                <span>{this.props.basket.price}원</span><br/>
                <input type="button" value="X" onClick={function(e) {
                 this.onClickDelete(bodyDeleteFromBasket)
                }.bind(this)}></input>
                <hr/>
            </div>
        );
    }
  }

  export default BasketInfo;