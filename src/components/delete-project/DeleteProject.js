import React, {useContext, useState} from 'react';
import axios from 'axios';
import styles from  './delete-project.module.css';
import Button from "../button/Button";
import {ProjectContext} from "../../context/ProjectContext";


    function DeleteProject() {
        const {project, exit} = useContext(ProjectContext);
        const [projectDeletedMessage, toggleProjectDeletedMessage] = useState(false);

        async function DeleteThisProject(project) {
            try {
                console.log(project.name);
                const response = await axios.delete(`https://localhost:8444/projects/${project.name}`)
                exit(project.name);
                toggleProjectDeletedMessage(true);
                setTimeout(()=> {toggleProjectDeletedMessage(false)}, 2000);

            } catch (e) {
                console.error(e);
            }
        }


        return (
            <>
                <Button
                    text="delete project"
                    type="button"
                    onClick={() => DeleteThisProject(project)}
                />
                {projectDeletedMessage && <p className={styles['delete-project-user-message']}>project successfully deleted</p>}
            </>
        );
    }


export default DeleteProject;