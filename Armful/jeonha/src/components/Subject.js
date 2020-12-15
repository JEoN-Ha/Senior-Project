import React, { Component } from 'react';

class Subject extends Component {   //Subject라는 태그를 생성
    render() {
      return (
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();  
          }.bind(this)}>{this.props.title}</a></h1>
          <h3>{this.props.sub}</h3>
          <h3>{this.props.desc}</h3>
        </header>
      );
    }
  }

  export default Subject;