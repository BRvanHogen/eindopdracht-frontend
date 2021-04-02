import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/band-dashboard.css';


function BandDashboard() {
    return (
        <>
            <p>dit is het dashboard van je band</p>
            <p>klik <Link to="/dashboard">hier</Link> om terug te gaan naar je persoonlijke dashboard</p>
            <Link to="/">uitloggen</Link>
        </>
    )
}

export default BandDashboard;