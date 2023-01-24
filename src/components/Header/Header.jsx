import React from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>
                <img
                    src='https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg'
                    alt={'as'}/>
                <h2>Social Network</h2>
            </div>
            <div className={s.auth_block}>
                {props.isAuthenticated ? props.login :<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header