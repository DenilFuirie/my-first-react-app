import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe} from './redux/state';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(

            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        , document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)