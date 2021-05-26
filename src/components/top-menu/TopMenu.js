import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './top-menu.module.css';
import {AuthContext} from "../../context/AuthContext";

function TopMenu() {
    const {user, logout} = useContext(AuthContext);

    function ShowAlertBeforeLoggingOut() {
        if (window.confirm('are you sure you want to log out?'))
        {
            logout();
        }
    }

    return (
        <div className={styles['top-menu']}>
        <ul className={styles.ul}>
            {user !== null ?
                <>
                    <li><NavLink to="/profile" className={styles.link}
                                 activeClassName={styles['active-link']}>dashboard</NavLink></li>
                    <li><NavLink to="/band-dashboard" activeClassName={styles['active-link']}>band dashboard</NavLink>
                    </li>
                    <li><NavLink to="/projects" activeClassName={styles['active-link']}>projects</NavLink></li>
                    <li><NavLink to="/sign-in" activeClassName={styles['active-link']} onClick={ShowAlertBeforeLoggingOut}>log out</NavLink> </li>
                </>
                :
                <>
                    <li><NavLink to="/sign-in" activeClassName={styles['active-link']}>log in</NavLink></li>
                    <li><NavLink to="/sign-up" activeClassName={styles['active-link']}>sign up</NavLink></li>
                </>
            }
            </ul>
        </div>
    )
}

export default TopMenu;