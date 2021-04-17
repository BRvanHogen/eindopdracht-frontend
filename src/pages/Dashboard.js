import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";


function Dashboard() {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <>
            <p>welkom {user && user.username}</p>
            <p>ga <Link to="/band-dashboard">hier</Link> naar de pagina van je band</p>
            <Link to="/">uitloggen</Link>
        </>
    )
}

export default Dashboard;