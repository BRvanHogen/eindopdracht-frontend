import React, {useContext, useState} from 'react';
import styles from './to-do-list.module.css';
import axios from 'axios';
import {ProjectContext} from "../../context/ProjectContext";
import {useForm} from "react-hook-form";
import Button from "../button/Button";
import {AuthContext} from "../../context/AuthContext";


function ToDoList() {
    const {  name } = useContext(ProjectContext);
    const { user } = useContext(AuthContext);
    const { handleSubmit, register, formState: {errors} } = useForm();
    const [userCue, toggleUserCue] = useState(false);

    async function PostTask(data) {
        const projectName = localStorage.getItem('name');
        console.log(projectName);
        console.log('are we getting any data?', data);
        try {
            if(projectName !== null) {
            const response = await axios.post(`https://localhost:8444/tasks/${projectName}/all-tasks`,{
                byUser: user.username,
                content: data.content,
                parentProject: projectName,
                // projectsId: projectName,
            });
            console.log(response);} else {
                toggleUserCue(true);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles['main-container']}>
            {userCue && <p className={styles['user-message']}>select a project before posting a task</p>}
            <form
                className={styles['main-form']}
                onSubmit={handleSubmit(PostTask)}>
                  <fieldset>
                      <label htmlFor="content">
                          <textarea
                          className={styles['text-area']}
                          name="content"
                          placeholder="Add a task for the to-do list ..."
                          {...register('content', {required: true})}
                          />
                      </label>

                      <label htmlFor="submit-task-button">
                          <Button
                          type="submit"
                          text="Add"
                          />
                      </label>
                  </fieldset>
            </form>
        </div>
    );
}

export default ToDoList;