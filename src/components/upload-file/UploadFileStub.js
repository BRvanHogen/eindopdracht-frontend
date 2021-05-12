import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import Button from "../button/Button";

function UploadFileStub() {
    // const {handleSubmit, register} = useForm();

    const uploadFile = async (e) => {
        console.log(e.target.files);
        const soundfile = e.target.files[0];
        console.log(soundfile);
        const base64 = await convertBase64(soundfile);
        console.log(base64);
    }

    const convertBase64 = (soundfile) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(soundfile);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    async function PostSoundFile(base64) {
        try {
            const response = await axios.post('https://localhost:8444/upload-file',
                {
                   base64
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    // data: base64,
                    // content: base64,
                }
            }
            );
        } catch (e) {
            console.error(e);
        }
    }

    return (
        // <form encType="multipart/form-data" onSubmit={handleSubmit(PostSoundFile)}>
        <>
            <input
                type="file"
                name="soundfile"
                /*{...register('soundfile')}*/
                onChange={(e) => {
                    uploadFile(e);
                }}
            />

            <Button
                // type="submit"
                // text="submit"
                type="button"
                text="submit"
                onClick={PostSoundFile}
            />
            {/* </form>*/}
        </>
    );
}

export default UploadFileStub;