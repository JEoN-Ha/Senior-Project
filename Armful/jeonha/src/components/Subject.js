import React, { Component } from 'react';
import "./Component.css"

class Subject extends Component {   //Subject라는 태그를 생성
    render() {
      return (
        <header>
          <h1 className="MainTitle"><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();  
          }.bind(this)}>{this.props.title}</a></h1>
          <hr></hr>
          <h3 className="SubTitle">{this.props.sub}</h3>
          <h3 className="SubTitle">{this.props.desc}</h3>
        </header>
      );
    }
  }

  export default Subject;