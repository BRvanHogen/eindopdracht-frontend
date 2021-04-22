import React from 'react';
import NewProject from "../../components/new-project/NewProject";
import ProjectsFetcher from "../../components/ProjectsFetcher";

function ProjectsPage() {
    return (
        <>
        <NewProject/>
        <ProjectsFetcher/>
        </>
    );
}

export default ProjectsPage;