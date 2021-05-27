import React, {useContext} from 'react';
import axios from 'axios';
import Button from "../button/Button";
import {ProjectContext} from "../../context/ProjectContext";
import {AuthContext} from "../../context/AuthContext";

function TaskFetcher() {
    const { name } = useContext(ProjectContext);

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
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <>
            <Button
                text="load tasks"
                onClick={FetchTasksForThisProject}
            />
        </>
    );
}

export default TaskFetcher;