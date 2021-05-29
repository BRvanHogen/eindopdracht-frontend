import React, {useState, useContext} from 'react';
import styles from './new-project.module.css';
import axios from 'axios';
import Button from "../button/Button";
import {useForm} from "react-hook-form";
import {useHistory} from 'react-router-dom';
import {ProjectContext} from "../../context/ProjectContext";
import LoadingRipple from "../loading-disc/loadingRipple";


function NewProject() {
    const { handleSubmit, register, formState: {errors} } = useForm();
    const history = useHistory();
    const [projectCreated, toggleProjectCreated] = useState(false);
    const { set } = useContext(ProjectContext);
    const [loading, toggleLoading] = useState(false);

    async function startNewProject(data) {
        console.log(data);
        try {
            const response = await axios.post('https://localhost:8444/projects', {
                name: data.name,
                workingTitle: data['working-title'],
                // id: data.id,
            });

            toggleProjectCreated(true);
            toggleLoading(true);

            setTimeout(() => {
                set(data.name);
                history.push(`/band-dashboard`);
            }, 2000);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit(startNewProject)}>
            <fieldset>
                {/*<legend>create new project</legend>*/}
                <label htmlFor="name">
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="project name"
                        {...register('name')}
                    />
                </label>

                <label htmlFor="working-title">
                    <input
                        className={styles.input}
                        type="text"
                        name="working-title"
                        id="working-title"
                        placeholder="working title"
                        {...register('working-title')}
                    />
                </label>

                {/*<input*/}
                {/*type="text"*/}
                {/*disabled={true}*/}
                {/*placeholder="id = auto-assign"*/}
                {/*{...register('id')}*/}
                {/*/>*/}

                <label>
                    <Button
                        type="Submit"
                        text="Create!"
                    />
                </label>
            </fieldset>
            {projectCreated === true &&
            <p className={styles['user-message']}>project created. You will be redirected to project page</p>}
        </form>
    {loading === true && <LoadingRipple/>}
</>
    );
}

export default NewProject;