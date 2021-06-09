import React from 'react';
import s from "./Header.module.css";
const Header = () => {
    return <header className= {s.header}>
        <img
            src="https://csru.ru/wp-content/uploads/posts/2012-03/thumbs/csru.ru_logotip-naruto.jpg"
            alt="Naruto foto"/>
    </header>
}
export default Header;