import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./components/redux/state";
import {addMessage} from "./components/redux/state";
import {addAnswer} from "./components/redux/state";
import {BrowserRouter, Route} from "react-router-dom"



export let rerenderAllTree=(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            {/*<React.StrictMode>*/}
            <App state={state} addPost={addPost} addMessage={addMessage} addAnswer={addAnswer}/>
            {/*</React.StrictMode>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}




