import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return <header className={s.header}>
        <div className={s.imgOne}>
            <img
                src="https://csru.ru/wp-content/uploads/posts/2012-03/thumbs/csru.ru_logotip-naruto.jpg"
                 alt="Naruto logo"/>
        </div>
        <div className={s.imgTwo}>
            <img
                src="https://dere.shikimori.one/system/user_images/original/448121/1115354.jpg"
                alt="Naruto text"/>

        </div>
    </header>
}
export default Header;