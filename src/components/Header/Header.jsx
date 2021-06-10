import React from 'react';
import s from "./Header.module.css";
import logo from "../../images/stringNaruto.png";
import logoMain from "../../images/MainAva.jpg";

const Header = () => {
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
    </header>
}
export default Header;