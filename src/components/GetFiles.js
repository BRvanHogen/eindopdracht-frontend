import React, {useState} from 'react';
import Button from "./button/Button";
import axios from 'axios';


async function FetchFiles() {
    const [files, setFiles] = useState([]);
    try {
        const response = await axios.get('https://localhost:8444/files', {headers: {
                "Content-Type": "application/json",
            }});

        console.log(response.data);
        setFiles(response.data);

    } catch (e) {
        console.error(e);
    }
}


function GetFiles() {
    return (
        <>
            <Button
            text="load files"
            onClick={FetchFiles}
            />
        </>
    );
}

export default GetFiles;