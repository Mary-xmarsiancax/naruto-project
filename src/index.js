import state, {subscribe} from "./components/redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewAnswerText, updateNewMessageText, updateNewPostText} from "./components/redux/state";
import {addMessage} from "./components/redux/state";
import {addAnswer} from "./components/redux/state";
import {BrowserRouter, Route} from "react-router-dom"



 let rerenderAllTree=(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            {/*<React.StrictMode>*/}
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
                 updateNewAnswerText={updateNewAnswerText}
                 addMessage={addMessage}
                 addAnswer={addAnswer}/>
            {/*</React.StrictMode>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderAllTree(state);


subscribe(rerenderAllTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
