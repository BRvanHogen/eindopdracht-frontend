import React, {useState, useContext} from 'react';
import axios from 'axios';
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import {ProjectContext} from "../../context/ProjectContext";



function NewProject() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const history = useHistory();
    const [projectCreated, toggleProjectCreated] = useState(false);
    const {set} = useContext(ProjectContext);

    async function startNewProject(data) {
        console.log(data);
        try {
            const response = await axios.post('https://localhost:8444/projects', {
                name: data.name,
                workingTitle: data.workingTitle,
            });

            // set(response.data.name);
            // console.log('set', set);

            toggleProjectCreated(true);

            setTimeout(() => {
                history.push(`/projects${data.name}`);
            }, 2000);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <form onSubmit={handleSubmit(startNewProject)}>
        <fieldset>
            <legend>create new project</legend>
            <label htmlFor="name">
        <input
        type="text"
        name="name"
        id="name"
        placeholder="project name"
        {...register('name')}
        />
            </label>

            <label htmlFor="working-title">
                <input
                    type="text"
                    name="working-title"
                    id="working-title"
                    placeholder="working title"
                    {...register('working-title')}
                />
            </label>

            <label>
                <Button
                type="Submit"
                text="Create!"
                />
            </label>
        </fieldset>
            {projectCreated === true &&
            <p>project created. You will be redirected to project page</p>}
        </form>

    );
}

export default NewProject;