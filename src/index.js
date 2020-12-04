import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state';
import './index.css';
import App from './App';



let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        , document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)