import React from 'react';
import styles from "./projects-page.module.css"
import NewProject from "../../components/new-project/NewProject";
import ProjectsFetcher from "../../components/projects-fetcher/ProjectsFetcher";
import ExitProject from "../../components/exit-project/ExitProject";
import DeleteProject from "../../components/delete-project/DeleteProject";

function ProjectsPage() {
    return (
        <div className={styles['main-container']}>

            <div className={styles['top-container']}>
                <h1 className={styles['top-container-title']}>Create new project</h1>
                <NewProject/>
            </div>

            <div className={styles['bottom-container']}>
                <div className={styles['load-projects']}>
                    <ProjectsFetcher
                    />
                </div>
                <div className={styles['exit-delete']}>
                    <ExitProject/>
                    <DeleteProject/>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;