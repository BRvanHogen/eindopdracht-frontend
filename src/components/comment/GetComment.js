import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";

function GetComment() {

        async function FetchComments() {
            const {jwtToken} = useContext(AuthContext);

            try {
                const result = await axios.get('https://localhost:8444/comments', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    }
                })

                console.log(result);

            } catch (e) {
                console.error(e);
            }
        }


    return (

        <Button
        text="load comments"
        onClick={FetchComments}
        />
    )

}

export default GetComment;