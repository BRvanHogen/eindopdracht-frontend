import React from 'react';
import NewProject from "../../components/new-project/NewProject";
import ProjectsFetcher from "../../components/ProjectsFetcher";
import ExitProject from "../../components/exit-project/ExitProject";
import DeleteProject from "../../components/delete-project/DeleteProject";

function ProjectsPage() {
    return (
        <>
            <NewProject/>
            <ProjectsFetcher/>
            <ExitProject/>
            <DeleteProject/>
        </>
    );
}

export default ProjectsPage;