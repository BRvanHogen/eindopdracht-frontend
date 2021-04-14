import axios from 'axios';
import React, { useEffect } from 'react';
const USERS_REST_API_URL = 'https://localhost:8444/users';

function UserService() {

    async function getUsers() {
        try {
            const response = await axios.get(USERS_REST_API_URL);
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=> {
        getUsers();
    }, []);

    return(
        <>
        <p>hier de users</p>
        </>
    );
}

export default UserService;