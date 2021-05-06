import React, {useContext} from 'react';
import axios from 'axios';
import Button from "../button/Button";
import {ProjectContext} from "../../context/ProjectContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//STRATEGIE: we gaan het project wissen welke in de ProjectContext staat
// ik heb geprobeerd met zowel name als project als variabele. Beiden geven andere foutmeldingen

    //
    // toast.configure()

    function DeleteProject() {
        const {project, exit} = useContext(ProjectContext);

        //project parameter verwijderd uit functie. Nu geen foutmelding 'can not read property of undefined'
        //grapje.
        async function DeleteThisProject(project) {
            try {
                console.log(project.name);
                const response = await axios.delete(`https://localhost:8444/projects/${project.name}`)
                exit(project.name);

                // const deleteWarning = () => {
                    toast.warn('project deleted',
                        {
                            position: toast.POSITION.TOP_CENTER,
                        })
                // }

            } catch (e) {
                console.error(e);
            }
        }

        return (
            <>
                <Button
                    text="delete project"
                    type="button"
                    onClick={() => DeleteThisProject(project)}
                />
            </>
        );
    }


export default DeleteProject;