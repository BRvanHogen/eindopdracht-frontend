import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import Button from "../components/button/Button";
import InputField from "../components/input-field/InputField";


function Dashboard() {
    const { user } = useContext(AuthContext);
    console.log(user); //is op het moment null. Vandaar hieronder ook leeg.

    return (
        <>
            <p>welkom {user && user.username}</p>
            <p>ga <Link to="/band-dashboard">hier</Link> naar de pagina van je band</p>
            <Link to="/">uitloggen</Link>
            <Button
            type="button"
            text="knop"
            />
            <InputField
            name="cake"
            id="cake"
            />
        </>
    )
}

export default Dashboard;