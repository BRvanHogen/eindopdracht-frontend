import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from "../context/AuthContext";
import Button from "./button/Button";
import {set} from "react-hook-form";

function ProjectsFetcher() {
    const history = useHistory();
    const {jwtToken} = useContext(AuthContext);
    const [songs, setSongs] = useState([]);

    async function fetchProjects() {
        try {
            const result = await axios.get('https://localhost:8444/projects')
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
            {songs.map((song) =>{
                console.log(song.name, song.workingTitle, song.id);
                return (
                    <ul>
                        {song.name}
                        {/*{song.workingTitle}*/}
                        {/*{song.id}*/}
                    </ul>
                )
            })}
        </>
    )
}

export default ProjectsFetcher;