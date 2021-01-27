import React, {Component} from 'react';
import store from '../store';
import "./Component.css";

export default class CustomerType extends Component {
    // state = {
    //     customerType:store.getState().customerType
    // }
    // constructor(props){
    //     super(props);
    //     store.subscribe(function () {
    //         this.setState({customerType:store.getState().customerType});           
    //     }.bind(this));
    // }

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
            <div className="CustomerType">
                <button style={btnStyle} onClick={function () {
                    this.props.DriveClick()                   
               }.bind(this)}>Drvie-Thru 이용</button>
               <button style={btnStyle} onClick={function () {
                    this.props.OnFootClick()                   
               }.bind(this)}>도보 이용</button>
            </div>
        )
    }
}