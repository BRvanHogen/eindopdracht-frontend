import React from 'react';


function LoginPage() {
    return (
        <>
        <p>hier inloggen</p>
            <label>
        <input type="text" placeholder="gebruikersnaam"/>
            </label>
            <label>
                <input type="text" placeholder="wachtwoord"/>
            </label>
            <button type="button">log in</button>
        </>
    )
}


export default LoginPage;