import React from 'react';
import s from "./Nav.module.css";
console.log(s);
// import  s from './Nav.module.css';
// let s = {
//     "nav": "Nav_nav__qQ1Lu",
//     "item": "Nav_item__3lxt2"
// }
const NavBar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <a>My profile</a>
        </div>
        <div className={s.item} >
            <a>Messages</a>
        </div>
        <div className= {s.item}>
            <a>Music </a>
        </div>
        <div className= {s.item}>
            <a>Settings</a>
        </div>

    </nav>
}
export default NavBar;