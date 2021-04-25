import React, { useContext, useState, useRef } from 'react';
import axios from 'axios';
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";

function UploadFile() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const { user } = useContext(AuthContext);
    const [file, setFile] = useState(null); //leeg object of lege string?
    const [message, setMessage] = useState('');

    const onFileChange = event => {
        setFile(event.target.files[0]);
    }

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append('myFile', file, file.name);
    }
    console.log(file);


    async function onButtonClick(formData) {
        // const formData = new FormData();
        // formData.append('myFile', file, file.name);

        try {
            const response = await axios.post('https://localhost:8444/upload-file', {
                formData
            });

            setMessage('successfully uploaded file');

        } catch (e) {
            console.error(e);
            setMessage('failed uploading file');
        }
    }

        return (
            <>
                    <input
                    type="text"
                    disabled={true}
                    value={user && user.username}
                    {...register('username')}
                    />

                    <input
                    type="file"
                    onChange={onFileChange}
                    />

                    <Button
                        type="button"
                        text="upload file"
                        onClick={onButtonClick}
                    />
                <p>{file && file.name}</p>
                <p>{file && file.size + ' bytes'}</p>
                <p>{file && 'type: ' + file.type}</p>
            </>
        );
    }

export default UploadFile;

//MEENEMEN BIJ UPLOAD:
//username (automatisch uit useContext?)
//project name (automatisch?)
// timestamp (automatisch, toevoegen aan backend)
//button disabled als er geen file geselecteerd is

//AANTEKENINGEN:
//de async function wordt aangeroepen bij button click.
//Probleem is dat dan de event nog leeg is. Cannot
//read property of null.
//HEEL misschien moet de functie wel helemaal niet async?