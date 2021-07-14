import React from 'react';
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";

const NavBar = (props) => {

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}> My profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}> Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}> News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}> Music </NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}> Settings </NavLink>
        </div>
        <div className={s.item}>
            <div className={s.friends}><a >Friends</a></div>
            <div>
                <FriendsContainer store={props.store}/>
            </div>
        </div>
    </nav>
}
export default NavBar;