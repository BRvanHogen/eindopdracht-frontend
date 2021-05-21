import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function UploadFileMultipart() {
    const {handleSubmit, register} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(data.file)
        console.log(data.file[0])
        PostFileToDatabase(data.file[0]);
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
        const response = await axios.post('https://localhost:8444/upload',
            {
                formData,
                // {headers: {"Content-Type": "multipart/form-data",}}
            })
    }

    return (
        // encType='multipart/form-data'
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="file"
                name="file"
                id="file"
                {...register('file', {required: true})}
            />
            <button
                type="submit"
            >
                submit
            </button>
        </form>
    );
}

export default UploadFileMultipart;