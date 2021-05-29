import React from 'react';
import axios from 'axios';

// function DeleteUserAuthority({usernamePassed, authorityPassed}) {

    async function DeleteUserAuthorityFromDB({username, authority}) {
        try {
            const response = await axios.delete(`https://localhost:8444/users/${username}/authorities/${authority}`);
        } catch (e) {
            console.error(e);
        }


    return(
        <>
        </>
    );
}

export default DeleteUserAuthorityFromDB;