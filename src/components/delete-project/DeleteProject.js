import React, {useContext} from 'react';
import axios from 'axios';
import Button from "../button/Button";
import {ProjectContext} from "../../context/ProjectContext";

//STRATEGIE: we gaan het project wissen welke in de ProjectContext staat
// ik heb geprobeerd met zowel name als project als variabele. Beiden geven andere foutmeldingen
function DeleteProject() {
    const { project, exit } = useContext(ProjectContext);

    //project parameter verwijderd uit functie. Nu geen foutmelding 'can not read property of undefined'
    async function DeleteThisProject() {
        try {
            console.log(project.name);
            const response = await axios.delete(`https://localhost:8444/projects/${project.name}`)
            exit(project.name);

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