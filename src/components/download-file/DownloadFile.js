import React, { useState } from 'react';
import axios from 'axios';
import Button from "../button/Button";


function DownloadFile() {
    const [downloadedFile, setDownloadedFile] = useState('');
    console.log('it got to DownloadFile!');

    async function FetchFile(userInput) {
        try{
            console.log('it got to FetchFile!');
            const response = await axios.get(`https://localhost:8444/files/${userInput}`);
            console.log(response.data);
            setDownloadedFile(response.data);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            {downloadedFile}
        </>
    );
}

export default DownloadFile;