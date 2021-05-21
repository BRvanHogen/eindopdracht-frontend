import React, {useState} from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import Button from "../button/Button";
const {parse, stringify} = require('flatted/cjs');


function UploadFileStub() {
    // const {handleSubmit, register} = useForm();
    const [base64FileToUpload, setBase64FileToUpload] = useState('');

    const uploadFile = async (e) => {
        console.log(e.target.files);
        const soundfile = e.target.files[0];
        console.log(soundfile);
        const base64 = await convertBase64(soundfile);
        console.log(base64);
        setBase64FileToUpload(base64);
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

    // ik had het eerst zonder state (gewoon direct variabele base64, welke ik dan doorgaf als parameter aan de functie).
    async function PostSoundFile() {
        // const buffer = Buffer.from(base64FileToUpload, 'base64');
        // hieronder probeer ik er een multipart file van te maken:
        const data = new FormData();
        // data.append('newFile', base64FileToUpload);
        const jsonStringify = JSON.stringify(base64FileToUpload);
        data.append('newFile', jsonStringify);

        try {
            const response = await axios.post('https://localhost:8444/upload-file',
                {
                   // jsonStringify
                    data
                }
            //     , {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // data: base64,
            //         // content: base64,
            //     }
            // }
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
                type="button"
                text="submit"
                onClick={PostSoundFile}
            />
            {/* </form>*/}
        </>
    );
}

export default UploadFileStub;

//BUG:
// submit button kan worden aangeklikt zonder dat er een file is klaargezet. Hierdoor crasht de applicatie.
// Om dit te voorkomen moet ik weer een state aanmaken. I.p.v. const soundfile op r. 12, krijg je dan setSoundFile.
// In het return blok vervolgens soundFile ? (normale button) : (button disabled={true})

//ALGEMEEN:
// de vraag is of de file-upload code van Peter wel out of the box werkt. Is de hele soundfile klasse die ik heb
// aangemaakt niet overbodig als deze wél out of the box blijkt te werken?
