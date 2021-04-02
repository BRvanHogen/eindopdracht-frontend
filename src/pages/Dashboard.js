import React from 'react';
import {Link} from 'react-router-dom';


function Dashboard() {
    return (
        <>
            <p>dit is het persoonlijke dashboard,welkom </p>
            <p>ga <Link to="/band-dashboard">hier</Link> naar de pagina van je band</p>
            <Link to="/">uitloggen</Link>
        </>
    )
}

export default Dashboard;