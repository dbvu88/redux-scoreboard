import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player'

import Scoreboard from './containers/Scoreboard';
import * as serviceWorker from './serviceWorker';



// 1. create a redux store that consist of reducer, 
const store = createStore(
    PlayerReducer
);

ReactDOM.render(
    // 2. wrap our app insde the Provider component, 
    // and pass that store to the redux/react provider component
    <Provider store={store}>
        <Scoreboard />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
