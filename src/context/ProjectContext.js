import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ProjectContext = createContext({});

function ProjectContextProvider({children}) {
    const [projectState, setProjectState] = useState({
        project: null,
        status: 'pending',
    });

    async function fetchProjectData(name) {
        console.log('name:', name);

        try {
            const result = await axios.get(`https://localhost:8444/projects/${name}`,
                { headers: {
                    "Content-Type": "application/json",
                    }
                }
            ); //hier config nog toevoegen of niet?

            setProjectState({
                project: {
                    name: result.data.name,
                    id: result.data.id,
                },
                status: 'done',
            });

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const name = localStorage.getItem('name'); //waar heb ik dit gedeclareerd?
        if (name !== null && projectState.project === null) {
            fetchProjectData(name);
        } else {
            setProjectState({
                project: null,
                status: 'done',
            });
        }
    }, []);

    async function setProject(name) {
        localStorage.setItem('name', name);
        fetchProjectData(name);
    }

    function exitProject() {
        localStorage.clear();
        setProjectState({
            project: null,
            status: 'done',
        });
    }

    const data = {
        ...projectState,
        set: setProject,
        exit: exitProject,
    };


    return (
        <ProjectContext.Provider value={data}>
            {children}
        </ProjectContext.Provider>
    );

}

export default ProjectContextProvider;