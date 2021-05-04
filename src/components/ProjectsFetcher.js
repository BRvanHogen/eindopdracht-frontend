import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {AuthContext} from "../context/AuthContext";
import Button from "./button/Button";
import {ProjectContext} from "../context/ProjectContext";
import { useHistory } from 'react-router-dom';


function ProjectsFetcher() {
    const {jwtToken} = useContext(AuthContext);
    const [songs, setSongs] = useState([]);
    const history = useHistory();
    const {set} = useContext(ProjectContext);


    async function fetchProjects() {
        try {
            const result = await axios.get(`https://localhost:8444/projects`)
            console.log(result.data);
            setSongs(result.data);

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <Button
                onClick={fetchProjects}
                text="load projects"
            />

            {songs.map((song) => {
                console.log(song.name, song.workingTitle, song.id)

                return (
                    <ul>
                        <li key={song.id}>
                        <Button
                        text={song.name}
                        type="button"
                        // key={song.id}
                        onClick={()=>set(song.name)}
                        />
                        </li>
                    </ul>
                )
            })}
        </>
    )
}

export default ProjectsFetcher;