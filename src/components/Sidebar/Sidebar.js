import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <NavLink to="/profile" className="sidebar__link" title="Профиль">Профиль</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink to="/messages" className="sidebar__link" title="Сообщения">Сообщения</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink to="/news" className="sidebar__link" title="Новости">Новости</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink to="/music" className="sidebar__link" title="Музыка">Музыка</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <NavLink to="/settings" className="sidebar__link" title="Настройки">Настройки</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar