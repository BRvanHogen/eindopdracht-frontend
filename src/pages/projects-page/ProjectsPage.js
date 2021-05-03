import React from 'react';
import NewProject from "../../components/new-project/NewProject";
import ProjectsFetcher from "../../components/ProjectsFetcher";
import ExitProject from "../../components/exit-project/ExitProject";

function ProjectsPage() {
    return (
        <>
            <NewProject/>
            <ProjectsFetcher/>
            <ExitProject/>
        </>
    );
}

export default ProjectsPage;