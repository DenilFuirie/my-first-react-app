import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from "./components/Dialogs/Message/Message";
import {BrowserRouter, Route} from "react-router-dom";
let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: '12'},
    {id: 2, message: 'Where are you been?', likesCount: 11},
    {id: 3, message: 'Can you send me your number?', likesCount: 15},
    {id: 4, message: 'I want a pizza', likesCount: 100},
    {id: 5, message: 'I want a pizza', likesCount: 100},
    {id: 6, message: 'I want a pizza', likesCount: 100},
    {id: 7, message: 'I want a pizza', likesCount: 100},
    {id: 8, message: 'I want a pizza', likesCount: 100},
    {id: 9, message: 'I want a pizza', likesCount: 100},

]
let dialogs = [
    {id: 1, name: 'Daniel'},
    {id: 2, name: 'Vadim'},
    {id: 3, name: 'Dmitry'},
    {id: 4, name: 'Dimych'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Hello'},
]

ReactDOM.render(
  <React.StrictMode>
      <App posts={post} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
