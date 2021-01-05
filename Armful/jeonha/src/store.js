import {createStore} from 'redux';

export default createStore(function (state, action) {
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)