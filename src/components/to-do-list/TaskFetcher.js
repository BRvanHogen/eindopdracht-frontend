import React, {useContext, useState} from 'react';
import axios from 'axios';
import styles from './task-fetcher.module.css';
import Button from "../button/Button";
import {ProjectContext} from "../../context/ProjectContext";
import {AuthContext} from "../../context/AuthContext";
import ToDoList from "./ToDoList";
import TimeFormatter from "../../helpers/TimeFormatter";
import DeleteCommentFromDB from "../comment/DeleteComment";
import DeleteTaskFromDB from "./DeleteTaskFromDB";

function TaskFetcher() {
    const {name} = useContext(ProjectContext);
    const {user} = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    async function FetchTasksForThisProject() {
        const projectName = localStorage.getItem('name');
        console.log(projectName);
        const jwtToken = localStorage.getItem('jwt');

        try {
            const response = await axios.get(`https://localhost:8444/tasks/${projectName}/all-tasks`, {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`,
            });
            console.log(response);
            setTasks(response.data);
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <div className={styles['main-wrapper']}>
            {/*<div className={styles['task-section-wrapper']}>*/}
            <div className={styles['task-action-wrapper']}>
                <div className={styles['username-post-task']}>
                    {user && <p className={styles['username-paragraph']}>{user.username}</p>}
                </div>
                <div className={styles['text-area-wrapper']}>
                    <ToDoList className={styles['text-area']}/>
                </div>
            </div>
            {/*</div>*/}
            {/*</div>*/}

            <div className={styles['tasks-display']}>
                {tasks.map((task) => {
                    {
                        if (task.parentProject === localStorage.getItem('name'))
                            return (
                                <ul>
                                    <li key={task.id}>
                                        <div className={styles['single-task-wrapper']}>
                                            <div className={styles['task-user-info']}>
                                                <p>{task.byUser}</p>
                                            </div>
                                            <div className={styles['task-content']}>
                                                <p>{`'${task.content}'`}</p>
                                                <p>{task.parentProject}</p>
                                                <div className={styles['delete-task-wrapper']}>
                                                    <i
                                                        className={styles['delete-task']}
                                                        onClick={() => DeleteTaskFromDB(task.id)}
                                                    >???????</i>
                                                </div>
                                                <div className={styles['task-timestamp']}>
                                                    <p>{TimeFormatter(task.timestamp)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            );
                    }
                })}
                {/*{children}*/}

                <div className={styles['load-button-wrapper']}>
                    <Button
                        text="load tasks"
                        onClick={FetchTasksForThisProject}
                    />
                </div>
            </div>
        </div>
    );
}


export default TaskFetcher;