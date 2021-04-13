import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/top-menu.css';

function TopMenu() {
    return (
        <div className="top-menu">
        <ul>
            <li><NavLink to="/profile" className="link" activeClassName="active-link">dashboard</NavLink></li>
            <li><NavLink to="/band-dashboard" activeClassName="active-link">band dashboard</NavLink></li>
            <li><NavLink to="/sign-in" activeClassName="active-link">login</NavLink></li>
            <li><NavLink to="/sign-up" activeClassName="active-link">sign up</NavLink></li>
        </ul>
        </div>
    )
}

export default TopMenu;