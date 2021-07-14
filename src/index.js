import store from "./components/redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom"


let rerenderAllTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>

            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>


        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderAllTree(store.getState());


store.subscribe(() => {
    let state = store.getState();
    rerenderAllTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
