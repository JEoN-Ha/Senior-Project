import React, {Component} from 'react';
import store from '../store';
import Welcome from './Welcome';

export default class Content extends Component {
    state = {
        mode_content:store.getState().mode_content
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({mode_content:store.getState().mode_content});           
        }.bind(this));
    }

    getContent(){
        let _article = null;
        if(this.state.mode_content === 'welcome'){
            _article = <Welcome></Welcome>
        }
        else if(this.state.mode_content === 'MENU'){
            
        }
        return _article;
    }
    render() {
        return (
            <div>
                {this.getContent()}
            </div>
        )
    }
}