import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import Button from "../components/button/Button";
import InputField from "../components/input-field/InputField";
import AvatarCropper from "../components/avatar/AvatarCropper";
import UploadAvatar from "../components/avatar/UploadAvatar";


function Dashboard() {
    const { user } = useContext(AuthContext);
    console.log(user); //is op het moment null. Vandaar hieronder ook leeg.

    return (
        <>
            <UploadAvatar/>
            <p>welkom {user && user.username}</p>
            <p>ga <Link to="/band-dashboard">hier</Link> naar de pagina van je band</p>
            <Link to="/">uitloggen</Link>
        </>
    )
}

export default Dashboard;