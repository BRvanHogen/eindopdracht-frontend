import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import styles from './upload-file-multipart.module.css';
import Button from "../button/Button";


function UploadFileMultipart() {
    const {handleSubmit, register} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(data.file)
        console.log(data.file[0])
        PostFileToDatabase(data.file[0]);
    }

    function onChange(e) {
        console.log(e.target.value);
    }

    async function PostFileToDatabase(fileByUser) {

        console.log(fileByUser);
        console.log('test');
        let formData  = new FormData();
        console.log('test');
        //name hieronder komt overeen met @RequestParam in Spring
        formData.append('file', fileByUser)
        console.log('test');
        console.log('formdata hier:', formData);
        // let formDataToPost = {content: formData}
        const response = await axios.post('https://localhost:8444/upload', formData,
            {headers: {"Content-Type": "multipart/form-data"}});
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['file-input-wrapper']}>
            <input
                type="file"
                className={styles['file-input']}
                name="file"
                id="file"
                {...register('file', {required: true})}
            />
                {/*<label*/}
                {/*    for="file"*/}

                {/*>Select file*/}
                {/*</label>*/}
            <Button
                type="submit"
                text="submit"
            >
                submit
            </Button>
            </div>
        </form>
    );
}

export default UploadFileMultipart;