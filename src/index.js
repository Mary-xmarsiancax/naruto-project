import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let newPostData = [
    {id: 1, message: "Hi!", likesCounte: "17"},
    {id: 2, message: "How are you?", likesCounte: "20"},
    {id: 3, message: "I am fine!I am under the water", likesCounte: "23"},
]

let DialogData = [
    {id: 1, name: "Max Barochkin"},
    {id: 2, name: "Serg"},
    {id: 3, name: "Ann Sokolova"},
    {id: 4, name: "Nina Zachmatova"},
    {id: 5, name: "Fred Mercury"},
]

let Messages = [
    {id: 1, message: "Hello!"},
    {id: 2, message: "Go to walk!!"},
    {id: 3, message: "Please call me!"},
    {id: 4, message: "Hop-hop-hop!"},
    {id: 5, message: "How are you?"},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={newPostData} dialogData={DialogData} message={Messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
