import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const history = useHistory();

    //state voor de gebruikersdata
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    });

    async function fetchUserData(jwtToken) {
        const decoded = jwt_decode(jwtToken);
        const userId = decoded.sub;

        //gebruikersdata halen we hier op
        try {
            const result = await axios.get(`https://localhost:8444/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })

            setAuthState({
                user: {
                    username: result.data.username, //dit kan destructuren. Zie avondles 1:36:45
                },
                status: 'done',
            });
    } catch (e) {
            console.error(e);
        }
}

    useEffect(()=> {
        //is er een token?
        const token = localStorage.getItem('jwt');

        if (token !== undefined && authState.user === null) {

            //haal dan de data op, want gebruiker is nog ingelogd  en we willen de data:
            fetchUserData(token);

        } else {
            //geen user? Dan wel data op done!
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);


    async function loginFunction(jwtToken) {
        console.log('LOGIN:', jwtToken);
        localStorage.setItem('jwt', jwtToken);

        //gebruikersdata ophalen en in context zetten
        fetchUserData(jwtToken);

        //daarna doorpushen
        setTimeout(()=>{
            history.push('/profile');
        }, 2000);
    }

    //uitlogfunctie
    function logoutFunction() {
        //leeghalen van local storage met localStorage.clear()

        // user in de context weer op 'null' zetten
    }

    //de spread operator gebruiken we omdat het hier
    //om een dynamisch object gaat. We willen de automatische
    //state updates blijven meenemen in data-object
    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
    };

    //hier wordt de data aan de componenten uitgeserveerd.
    //alleen als de applicatiestatus done is, worden de children geshowd.
    //anders slechts de loading status
    return (
         <AuthContext.Provider value={data}>
             {authState.status === 'done'
                 ? children
             : <p>Loading ...</p>
             }
         </AuthContext.Provider>
    );
}

export default AuthContextProvider;


// [x] context importeren
// [x] AuthContext maken met createContext
// [ ] AuthcontextProvider functie component met daarin
    // [ ] het echte AuthContext.Provider component
    // [ ] stukje state
// [ ] Provider om <App> wikkelen in de index.js

// AUTHENTICATIE
// [x] maak raamwerk voor alle informatie die in de Context moet staan (login, logout, state)
// [x] maak state aan en lege functies
// [x] meegeven aan value prop
// [ ] test dit door een component aan te melden op de context met useContext


