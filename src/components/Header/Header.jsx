import React from 'react';
import s from "./Header.module.css";
import logo from "../../images/stringNaruto.png";
import logoMain from "../../images/MainAva.jpg";
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.imgOne}>
            <img
                src={logoMain}
                 alt="Naruto logo"/>
        </div>
        <div className={s.imgTwo}>
            <img
                src={logo}
                alt="Naruto text"/>

        </div>
        <div className={s.loginBlock}>
            {props.isAuth
            ? props.login
            :<NavLink to={"/login"}>Login</NavLink>}

        </div>
    </header>
}
export default Header;