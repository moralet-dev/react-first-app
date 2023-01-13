import React from "react"
import cl from './Header.module.css'

function Header() {
    return (
        <header className={cl.header}>
            <img src='https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg' />
            Header
        </header>
    )
}

export default Header