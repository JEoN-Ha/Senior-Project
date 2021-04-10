import React, {Component} from 'react';
import PaymentInfo from '../containers/PaymentInfo';
import "./Component.css";
import store from '../store';

export default class PaymentHistory extends Component {
    state = {
        customer_id:store.getState().customer_id,
        jeonhaUrl:store.getState().jeonhaUrl,
        paymentData : [  // DB 연결 후 null로 바꾸기
            // {
            //     id : 1,
            //     nameKorea : '아메리카노',
            //     count : 1,
            //     price : '4,400'
            // },
            // {
            //     id : 2,
            //     nameKorea : '돌체 블랙 밀크티',
            //     count : 2,
            //     price : '10,600'
            // }
            {id:null, nameKorea:null, price:null, count:null}
        ]
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        const bodyGetOrder = JSON.stringify({
            userWebId: this.state.customer_id
        });
        this.getOrderHistory(bodyGetOrder);
    };

    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked // true —- target.checked 속성을 이용해서 라디오 버튼이 선택되었는지 여부를 확인한다.
        this.setState({radioGroup: obj})
    }

    getOrderHistory = (_body) => {
        fetch(this.state.jeonhaUrl + '/getOrder', {
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
            const isError = data.isError;
            const orderHistory = data.orderAllData;
            //this.state.paymentData = orderHistory;
            console.log(orderHistory[0])
            let _orderHistory = []
            for (let i = 0; i < orderHistory.length; i++) {
                for(let j=0; j < orderHistory[i].length; j++){
                    _orderHistory.push({
                        id: orderHistory[i].MenuNo,     //DB보고 수정하기
                        nameKorea: orderHistory[i].FoodNameKor,
                        price: orderHistory[i].Price,
                        count: orderHistory[i][j].MenuCount
                    })
                }
            }
            this.setState({
            paymentData: _orderHistory,
            isLoading: true
            })
            console.log(this.state.paymentData)
            // 확인을 위한 console.log
            // console.log(isError);
            // console.log(orderHistory);
        }) 
    }

    render() {
        const mapToComponent = data => {
            return data.map((payment, i) => {
                return (<PaymentInfo payment={payment} key={i}
                  getCount = {function(_count,_id){
                    let i = 0;
                    let data = Array.from(this.state.paymentData);
                    while(i < data.length){
                        if(data[i].id === _id){
                            data[i].count = _count;
                            break;
                        }
                        i = i + 1;
                    }
                    this.setState({
                        paymentData:data
                    });
                  }.bind(this)}
                  ></PaymentInfo>);
            });
        };
        return (
            <div>
               <h2>결제 내역</h2>
                {/* DB로부터 장바구니 내역 가져오기 */}
                {/* {this.getFetch(bodyGetOrder)} */}
                {/* 장바구니 내역 그리기 */}
                {mapToComponent(this.state.paymentData)}
            </div>
        )
    }
}