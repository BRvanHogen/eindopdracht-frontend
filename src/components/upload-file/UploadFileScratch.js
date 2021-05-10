import React from 'react';
import {useForm} from "react-hook-form";
import Button from "../button/Button";
import axios from 'axios';
import punkMp3 from '../../assets/songs/Test - Punk mp3.mp3';
import Base64Converter from "../../helpers/Base64Converter";


function UploadFileScratch() {
    const {handleSubmit, register, formState: {errors}} = useForm();

    async function onSubmit(data) {
        try {
            // const encodedString = Buffer.from({data}).toString('base64');
            // const encodedFile = btoa(data);
            const encodedFile = Base64Converter(data);
            const response = await axios.post('https://localhost:8444/upload-file', {
                headers: {
                    'Content-Type': 'application/json',
                    // data: encodedString,
                    data: encodedFile,
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