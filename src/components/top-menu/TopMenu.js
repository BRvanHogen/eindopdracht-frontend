import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './top-menu.module.css';

function TopMenu() {
    return (
        <div className={styles['top-menu']}>
        <ul>
            <li><NavLink to="/profile" className="link" activeClassName={styles['active-link']}>dashboard</NavLink></li>
            <li><NavLink to="/band-dashboard" activeClassName={styles['active-link']}>band dashboard</NavLink></li>
            <li><NavLink to="/sign-in" activeClassName={styles['active-link']}>log out</NavLink></li>
            <li><NavLink to="/sign-up" activeClassName={styles['active-link']}>sign up</NavLink></li>
        </ul>
        </div>
    )
}

export default TopMenu;