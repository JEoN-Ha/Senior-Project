import React, { Component } from 'react';

class CustomerList extends Component {
    render() {
      let customerLists = [];
      let data = this.props.data;
      let i = 0;
      while(i < data.length){
        customerLists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].ID}</a>
        </li>);
        i = i + 1;
      }
      return (
        <nav>
            <ul>
                {customerLists}
            </ul>
        </nav>
      );
    }
  }

export default CustomerList;