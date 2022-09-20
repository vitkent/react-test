import React from "react";
import './Header.scss'

import logoImg from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <a href="/" title="На главную">
                    <img className="header__logo" src={logoImg} alt='logo' width='90' height='50'></img>
                </a>
            </header>
        </div>
    )
}

export default Header