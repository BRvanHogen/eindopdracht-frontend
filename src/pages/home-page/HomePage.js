import React from 'react';
import styles from './home-page.module.css';
import Button from "../../components/button/Button";
import {NavLink} from "react-router-dom";

function HomePage() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles['title-wrapper']}>
                <h1 className={styles.title}>GarageLab</h1>
                </div>
                <div className={styles['paragraph-wrapper']}>
                    <p className={styles.paragraph}>Welcome to GarageLab, the musician's tool. Please proceed by logging in or signing up.</p>
                </div>

                <div className={styles['buttons-wrapper']}>
                    <NavLink to="/sign-in">
                        <Button
                        text="Log in"
                        />
                    </NavLink>

                    <NavLink to="/sign-up">
                        <Button
                        text="Sign up"
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    );
}


export default HomePage;