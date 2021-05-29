import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import Button from "../button/Button";
import DeleteUserAuthorityFromDB from "./DeleteUserAuthorityFromDB";

function ConfirmBeforeDelete({username, authorityToDelete}) {
    if (window.confirm('Authority will be deleted. Proceed?'))
    {
        console.log(authorityToDelete);
        DeleteUserAuthorityFromDB({username, authorityToDelete});
    }
}

function GetUserAuthorities() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [authorityOne, setAuthorityOne] = useState('');
    const [authorityTwo, setAuthorityTwo] = useState('');
    const [username, setUsername] = useState('');


    async function GetUserAuthoritiesFromDB(data) {
        setAuthorityOne('');
        setAuthorityTwo('');
        console.log(data.username);
        setUsername(data.username);
        console.log('hallo?');
        const response = await axios.get(`https://localhost:8444/users/${data.username}/authorities`, {headers: {
                "Content-Type": "application/json",
            }});
        console.log(response.data);
        if (response.data.length === 2) {
            setAuthorityOne(response.data[0].authority);
            setAuthorityTwo(response.data[1].authority);
            console.log(response.data[0].authority);
            console.log(response.data[1].authority);
        }
        if (response.data.length === 1) {
            setAuthorityOne(response.data[0].authority);
            console.log(response.data[0].authority);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit(GetUserAuthoritiesFromDB)}>
            <input
            type="text"
            name="username"
            placeholder="find user by username. Case sensitive"
            {...register('username', {required: true})}
            />
                <Button
                type="submit"
                />
            </form>
            <div>

                <div>
                    {authorityOne &&
                    <p>{authorityOne}
                    </p>}
                    {authorityOne &&
                    <input
                        type="checkbox"
                        defaultChecked={true}
                        onChange={()=> ConfirmBeforeDelete({username, authorityOne})}
                    />}
                </div>

                <div>
                    {authorityTwo &&
                <p>{authorityTwo}
                </p>}
                    {authorityTwo &&
                    <input
                    type="checkbox"
                    defaultChecked={true}
                    onChange={()=> ConfirmBeforeDelete({username, authorityTwo})}
                    />
                    }
                </div>
            </div>
        </>
    );
}

export default GetUserAuthorities;

//volgende endpoint om aan te spreken is PostMapping "/users/{username}/authorities

// ik wil dat vanuit de rollen weergegeven op dit scherm (r. 41-42) de admin deze kan verwijderen.
// er moet dus een onClick op de p-elementen worden geplaatst, die als parameter {authorityOne} dan
// wel {authorityTwo} verwacht. De functie voor het verwijderen van authorities kan elders worden
// geschreven.
// Er moet echter ook een functie komen voor het toekennen van authorities. Misschien toch werken
//met extra elementen? twee boxjes ofzo?

// de authorities worden alleen laten zien, als de user deze heeft. Ik ga ze dus by-default op checked zetten.
// de admin kan ze dan unchecken wat de functie aanroept om een authority te deleten.
// als een user één of géén authorities heeft, moet de admin de mogelijkheid hebben om er meer toe te voegen
