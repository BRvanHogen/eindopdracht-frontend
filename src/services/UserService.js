import axios from 'axios';
import React, { useEffect, useState } from 'react';
const USERS_REST_API_URL = 'https://localhost:8444/users';

function UserService() {
    const [users, setUsers] = useState();

    async function getUsers() {
        try {
            const response = await axios.get(USERS_REST_API_URL);
            setUsers(response);
            console.log(users);
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