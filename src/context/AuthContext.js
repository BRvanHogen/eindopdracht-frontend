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
        console.log('LOGIN:', jwtToken);
        const decode = jwt_decode(jwtToken);
        const userId = decode.sub;
        console.log('decode:', decode);


        try {
            const result = await axios.get(`https://localhost:8444/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result);

            setAuthState({
                user: {
                    username: result.data.username,
                    id: result.data.sub
                },
                status: 'done',
            });

        } catch (e) {
            console.error(e);
        }

    }


    useEffect(()=> {
        const token = localStorage.getItem('jwt');
        if (token !== null && authState.user === null) {
            fetchUserData(token);

        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    },[]);

async function loginFunction(jwtToken) {
    localStorage.setItem('jwt', jwtToken);

    fetchUserData(jwtToken);

    setTimeout(()=>{
        history.push('/profile')
    }, 2000);
}

    //uitlogfunctie
    function logoutFunction() {
        //leeghalen van local storage met localStorage.clear()
        // user in de context weer op 'null' zetten
        localStorage.clear();
        setAuthState({
            user: null,
            status: 'done',
        });
    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
    };


    return (
         <AuthContext.Provider value={data}>
             {children}
         </AuthContext.Provider>
    );
}

export default AuthContextProvider;
