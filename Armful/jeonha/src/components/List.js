import React, { Component } from 'react';

class List extends Component {
    shouldComponentUpdate(newProps, newState){  //바뀐 부분이 있을 때만 렌더
      if(this.props.data === newProps.data){
        return false;
      } else {
        return true;
      }
    }

    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>);
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default List;