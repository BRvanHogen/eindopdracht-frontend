import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ProjectsFetcher() {
const history = useHistory();

    async function fetchProjects () {
        try {
            const result = await axios.get('https://localhost:8444/projects', {
            })
            history.push('/projects');

            console.log(result);

        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
        <button onClick={fetchProjects}>fetch projects</button>
        </>
    )
}

export default ProjectsFetcher;

//component maken dat op BandDashboard kan worden geplaatst
//dit pusht naar een nieuwe pagina waar dan de opgesomde projecten staan
// gebruiker kan er een selecteren en het project wordt
//geopend op band dashboard


