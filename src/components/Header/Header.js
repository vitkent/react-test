import React from "react";
import './Header.scss'

import logoImg from '../../assets/img/logo.svg'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <NavLink to="/" title="На главную">
                    <img className="header__logo" src={logoImg} alt='logo' width='90' height='50'></img>
                </NavLink>
            </header>
        </div>
    )
}

export default Header