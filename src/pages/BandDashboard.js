import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../stylesheets/band-dashboard.module.css';
import SongDetails from "../components/SongDetails";


function BandDashboard({title, children}) {
    return (
        <>
            <p>dit is het dashboard van je band</p>
            <p>klik <Link to="/dashboard">hier</Link> om terug te gaan naar je persoonlijke dashboard</p>
            <Link to="/">uitloggen</Link>
            <h2>{title}</h2>
            <div className={styles.notitions}>
                <h2>to do:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, hic! Accusamus, hic!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, hic!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, hic!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, hic!</p>
                    {children}
            </div>
            <div className={styles['song-details']}>
                <SongDetails
                songLength={'03:34'}
                contributors={'Bob, Thalys'}
                lastContributionBy={'Bob'}
                lastContributionLength={'00:45'}
                />
            </div>
        </>
    )
}

export default BandDashboard;