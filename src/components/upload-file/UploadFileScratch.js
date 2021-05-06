import React from 'react';
import {useForm} from "react-hook-form";
import Button from "../button/Button";
import axios from 'axios';


function UploadFileScratch() {
    const {handleSubmit, register, formState: {errors}} = useForm();


    async function onSubmit(data) {
        try {
            const response = await axios.post('https://localhost:8444/upload-file', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // dit ook geprobeerd met application/json, dit stond nl. in postman bij headers
                    data: data,
                }
        });
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="file"
                name="file"
                {...register('soundfile')}
            />
            <Button
            type="submit"
            text="submit"
            />
        </form>
    );
}

export default UploadFileScratch;