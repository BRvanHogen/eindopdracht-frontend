import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';


function GetUsers() {
    const [users, setUsers] = useState([]);
    const jwtToken = localStorage.getItem('jwt');
    console.log(jwtToken);

    useEffect(()=> {
    async function GetUsersPlease() {
        try {
            console.log('hallo');
            const response = await axios.get('https://localhost:8444/users/get-users', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(response);
            setUsers(response.data);

        } catch (e) {
            console.error(e);
        }
    }

    GetUsersPlease();
    }, []);

        return (
            <>
                {users && users.map((user) => {
                    return (
                        <p>{user.username}</p>
                    );
                })}
            </>
        );
    }


export default GetUsers;