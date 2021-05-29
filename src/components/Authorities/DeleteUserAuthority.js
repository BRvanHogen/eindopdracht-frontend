import React from 'react';
import axios from 'axios';

function DeleteUserAuthority() {

    async function DeleteUserAuthorityFromDB({data, authority}) {
        try {
            const response = await axios.delete(`https://localhost:8444/users/${data}/authorities/${authority}`);
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <>
        </>
    );
}

export default DeleteUserAuthority;