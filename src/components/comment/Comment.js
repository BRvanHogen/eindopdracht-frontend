import React, { useState, useContext } from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {AuthContext} from "../../context/AuthContext";
import styles from './comment-form.module.css';

function Comment() {
    const [comment, SetComment] = useState("");
    const {handleSubmit, register, formState: {errors}} = useForm();
    const { user } = useContext(AuthContext);


    async function postComment(data) {
        try {
            const result = await axios.post('https://localhost:8444/comments', {
                byUser: user.username,
                textareaInput: data.comment,
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


//[x] useState bij begin ""
//[ ] useState wordt aangepast o.b.v. e.target.value
//[ ] user activity tracken door event
//[ ] user moet input kunnen submitten d.m.v. form
//[ ] comment moet opgeslagen worden in db voor volgende keren
//[ ] axios importeren, async function, try/catch etc.

// [ ] apart component aanmaken voor getten van comments