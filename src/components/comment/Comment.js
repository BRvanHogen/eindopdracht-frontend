import React, { useState, useContext } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {AuthContext} from "../../context/AuthContext";
import styles from './comment-form.module.css';
import {ProjectContext} from "../../context/ProjectContext";

function Comment() {
    const [comment, SetComment] = useState("");
    const {handleSubmit, register, formState: {errors}} = useForm();
    const { user } = useContext(AuthContext);
    const { name, id } = useContext(ProjectContext);


    async function postComment(data) {
        try {
            const result = await axios.post('https://localhost:8444/comments', {
                byUser: user.username,
                textareaInput: data.comment,
                //hier moet projects_id nog worden toegevoegd toch?
            })
            console.log(result);
            SetComment(result);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <form className={styles['comment-form']} onSubmit={handleSubmit(postComment)}>
        <textarea
            {...register('comment', {required: true})}
        />
            <button
            type="submit"
            >
                post
            </button>
            </form>
        </>
    );
}

export default Comment;