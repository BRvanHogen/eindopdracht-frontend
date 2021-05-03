import React, {useContext} from 'react';
import axios from 'axios';
import Button from "../button/Button";
import {ProjectContext} from "../../context/ProjectContext";

//STRATEGIE: we gaan het project wissen welke in de ProjectContext staat
// ik heb geprobeerd met zowel name als project als variabele. Beiden geven andere foutmeldingen
function DeleteProject() {
    const { project } = useContext(ProjectContext);

    async function DeleteThisProject(project) {
        try {
            console.log(project.name);
            const response = await axios.delete(`https://localhost:8444/projects/${project.name}`)

        } catch (e) {
            console.error(e);
        }
    }

    return (
      <>
          <Button
          text="delete project"
          type="button"
          onClick={()=>DeleteThisProject(project)}
          />
      </>
    );
}

export default DeleteProject;