import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export let dialogs = [
    {name: 'Jack', id: '1',},
    {name: 'Bill', id: '2',},
    {name: 'Ashley', id: '3',},
    {name: 'Di', id: '4',},
    {name: 'Valery', id: '5',},
    {name: 'Andrew', id: '6',}
]

export let messages = [
    {msg: 'Hi!'},
    {msg: 'How are you?!'},
    {msg: 'Keep calm!'},
    {msg: 'And learn React!'},
]

export let posts = [
    {id: '1', msg: 'Hi!', likesCount: '2'},
    {id: '1', msg: 'Hello!', likesCount: '22'},
    {id: '1', msg: 'How are you?', likesCount: '68'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
