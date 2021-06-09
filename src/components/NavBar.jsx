import React from 'react';
import s from "./Nav.module.css";
// import  s from './Nav.module.css';
// let s = {
//     "nav": "Nav_nav__qQ1Lu",
//     "item": "Nav_item__3lxt2",
// }
const NavBar = () => {
    return <nav className="Nav_nav__qQ1Lu">
        <div className="Nav_item__3lxt2">
            <a>My profile</a>
        </div>
        <div className= "Nav_item__3lxt2">
            <a>Messages</a>
        </div>
        <div className= "Nav_item__3lxt2">
            <a>Music</a>
        </div>
        <div className= "Nav_item__3lxt2">
            <a>Settings</a>
        </div>

    </nav>
}
export default NavBar;