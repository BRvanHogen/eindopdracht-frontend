import React, { useContext} from 'react';
import axios from 'axios';
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";

function UploadFile() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const { user } = useContext(AuthContext);

    async function onButtonClick(data) {
        try {
            const response = await axios.post('https://localhost:8444/upload-file', {
                file: data.file,
            });

        } catch (e) {
            console.error(e);
        }
    }


        return (
            <>
                <form
                    // className={}
                    onSubmit={handleSubmit(onButtonClick)}>
                    <input
                    type="text"
                    disabled={true}
                    value={user && user.username}
                    />
                    <Button
                        type="submit"
                        text="upload file"
                    />
                </form>
            </>
        );
    }


export default UploadFile;

//MEENEMEN BIJ UPLOAD:
//username (automatisch uit useContext?)
//project name (automatisch?)
// timestamp (automatisch, toevoegen aan backend)
//button disabled als er geen file geselecteerd is