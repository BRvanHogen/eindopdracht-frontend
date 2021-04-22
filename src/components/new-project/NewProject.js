import React from 'react';
import axios from 'axios';
import Button from "../button/Button";
import { useForm } from "react-hook-form";



function NewProject() {
    const {handleSubmit, register, formState: {errors}} = useForm();

    async function startNewProject(data) {
        console.log(data);
        try {
            const response = await axios.post('https://localhost:8444/projects', {
                name: data.name,
                workingTitle: data.workingTitle,
            })
        } catch (e) {
            console.error(e);
        }
    }

    //en automatisch doorpushen naar project pagina.

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
        </form>
    );
}

export default NewProject;