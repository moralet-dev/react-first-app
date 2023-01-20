import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavbarFriends from "./NavbarFriends/NavbarFriends";
import StoreContext from "../../storeContext";

function Navbar() {
    return (<StoreContext.Consumer>{
            (store) => (
                <nav className={s.nav}>
                    <div className={s.item}>
                        <NavLink to='/profile'
                                 className={(navData) => navData.isActive ? `${s.active}` : ""}>
                            Profile
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/dialogs' className={(navData) => navData.isActive ? `${s.active}` : ""}>
                            Dialogs
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/news' className={(navData) => navData.isActive ? `${s.active}` : ""}>
                            News
                        </NavLink></div>
                    <div className={s.item}>
                        <NavLink to='/music' className={(navData) => navData.isActive ? `${s.active}` : ""}>
                            Music
                        </NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/settings'
                                 className={(navData) => navData.isActive ? `${s.active}` : ""}>
                            Settings
                        </NavLink></div>
                    <NavbarFriends firends={store.getState().navbarPage.friends}/>
                </nav>
            )
        }
        </StoreContext.Consumer>
    )
}

export default Navbar