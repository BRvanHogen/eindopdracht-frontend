import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/button/Button";
import styles from "../profile/dashboard.module.css";
import profilePic from "../../assets/pics/other/pasfoto.jpg"


function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    console.log(user);

    return (
        <div className={styles.background}>
            <div className={styles['header-container']}>
            <h1>{user && user.username}</h1>
                <img
                className={styles['profile-pic']}
                src={profilePic}
                />
            <Button
                type="button"
                onClick={logout}
                text="log out"
            />
            </div>
            <div className={styles['content-wrapper']}>
            <div className={styles['activity-container']}>
                <p>Recent activity</p>
            </div>

            <div className={styles['user-details']}>
                <p>user details</p>
            </div>
            </div>
        </div>

    )
}

export default Dashboard;