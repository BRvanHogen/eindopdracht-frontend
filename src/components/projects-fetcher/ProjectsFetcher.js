import React, {useContext, useEffect, useState} from 'react';
import styles from "./projects-fetcher-module.css";
import axios from 'axios';
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";
import {ProjectContext} from "../../context/ProjectContext";
import {NavLink, useHistory} from 'react-router-dom';


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
            document.getElementById('fetch').classList.add('hide-button');

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <Button
                onClick={fetchProjects}
                text="load projects"
                id="fetch"
            />

            {songs.map((song) => {
                console.log(song.name, song.workingTitle, song.id)

                return (
                    <div className={styles['projects-list-container']}>
                    <ul className={styles.ul}>
                        <li
                            className={styles.li}
                            key={song.id}
                        >
                        <Button
                        text={song.name}
                        type="button"
                        // key={song.id}
                        onClick={()=>set(song.name)}
                        />
                        </li>
                    </ul>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectsFetcher;