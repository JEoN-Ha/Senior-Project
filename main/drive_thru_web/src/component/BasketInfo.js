import React, { Component } from 'react';
import store from '../store';

class BasketInfo extends Component {
    state = {orderName:store.getState().orderName,
    customer_id:store.getState().customer_id,
    jeonhaUrl:store.getState().jeonhaUrl, menuAllData:store.getState().menuAllData,
    nameKorea:null, price:null, menuNo:null}
    constructor(props){
    super(props);
    store.subscribe(function () {
        this.setState({orderName:store.getState().orderName,
            menuAllData:store.getState().menuAllData}
        );           
    }.bind(this));
    };

    componentWillUnmount() {
    console.log('componentWillUnmount');
    }

    componentDidUpdate() {

    }

    onClickDelete(_body){
        fetch(this.state.jeonhaUrl + '/deleteFromBasket', {
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
                const getMenuIsError = data.isError;
                const whatIsError = data.explainError;
        
                if (getMenuIsError) {
                    console.log(whatIsError);
                }
            })
    }

    render() {
        for (let i=0;i<this.state.menuAllData.length;i++){
            if(this.props.basket.basketNo === this.state.menuAllData[i].id){
                this.state.nameKorea = this.state.menuAllData[i].nameKorea;
                this.state.price = this.state.menuAllData[i].price;
                this.state.menuNo = this.state.menuAllData[i].id;
            }
        }
        const menuTotalPrice = this.props.basket.count*this.state.price;
        const bodyDeleteFromBasket = JSON.stringify({
            userWebId: this.state.customer_id,
            menuNo: this.state.menuNo,
            menuCount: this.props.basket.count
        })
        return (
            <div>
                <hr/>
                <span>{this.state.nameKorea}</span><br/>
                <span>{this.props.basket.count}개 </span>
                <span>{menuTotalPrice}원 </span>
                <input type="button" value="X" onClick={function(e) {
                 this.onClickDelete(bodyDeleteFromBasket)
                 this.props.onClickDelete()
                }.bind(this)}></input>
                <hr/>
            </div>
        );
    }
  }

  export default BasketInfo;