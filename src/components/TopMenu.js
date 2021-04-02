import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/top-menu.css';

function TopMenu() {
    return (
        <div className="top-menu">
        <ul>
            <li><NavLink to="/dashboard" className="link" activeClassName="active-link">dashboard</NavLink></li>
            <li><NavLink to="/band-dashboard" activeClassName="active-link">band dashboard</NavLink></li>
            <li><NavLink to="/" exact activeClassName="active-link">login</NavLink></li>
        </ul>
        </div>
    )
}

export default TopMenu;