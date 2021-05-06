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
    const { project } = useContext(ProjectContext);
    //onderstaande werkt wel in de console, niet in het doorgeven naar post-request
    // const projectName = localStorage.getItem('name');
    // console.log(projectName);
    console.log(project);
    console.log(user);
    //raar dat ie dit dan niet wilt:
    // console.log(project.id);

    async function postComment(data) {
        try {
            const result = await axios.post('https://localhost:8444/comments', {
                byUser: user.username,
                textareaInput: data.comment,
                //hier moet projects_id nog worden toegevoegd toch? JAZEKER:
                // projectsId: localStorage.getItem('')
                project: project
                //project.name geeft foutmelding cannot read of undefined, localStorage.getItem('name') geeft
                //statuscode 400 (bad syntax)
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