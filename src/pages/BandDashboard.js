import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from '../stylesheets/band-dashboard.module.css';
import SongDetails from "../components/SongDetails";
import ProjectsFetcher from "../components/ProjectsFetcher";
import Comment from "../components/comment/Comment";
import UploadFile from "../components/upload-file/UploadFile";
import Sidebar from "../components/sidebar/Sidebar";
import axios from 'axios';
import GetComment from "../components/comment/GetComment";
import Button from "../components/button/Button";
import TimeFormatter from "../helpers/TimeFormatter";
import {ProjectContext} from "../context/ProjectContext";
import AudioPlayerScratch from "../components/audio-player/AudioPlayerScratch";


function BandDashboard({title, children}) {
    const [comments, setComments] = useState([]);
    const { ...projectState } = useContext(ProjectContext);
    console.log(projectState);
    const projectName = (localStorage.getItem('name'));
    console.log(projectName);

    async function FetchComments() {
        try {
            const response = await axios.get('https://localhost:8444/comments')
            console.log(response.data);
            setComments(response.data);

        } catch (e) {
            console.error(e);
        }
        // useEffect(()=>{
        //     FetchComments();
        // },[])
    }




    return (
        <div className={styles.main}>
            <p>klik <Link to="/projects">hier</Link> voor de projectportal</p>
            <Link to="/">uitloggen</Link>

            {/*deze is nu null want project name en id worden niet opgeslagen in de context*/}
            <h2>{projectName && projectName}</h2>
            <div className={styles.notitions}>
                <h2>to do:</h2>
                    <Comment/>
                <Button
                text="load comments"
                onClick={FetchComments}
                />
                {comments.map((comment) => {
                    return (
                       <ul>
                           <p>{TimeFormatter(comment.timestamp)}</p>
                           <p>{comment.textareaInput}</p>
                       </ul>
                    )
                })}
                    {children}
            </div>

            <div className={styles['song-details']}>
                <SongDetails
                songLength={'03:34'}
                contributors={'Bob'}
                lastContributionBy={'Bob'}
                lastContributionLength={'00:45'}
                />
                <UploadFile/>
                {/*<AudioPlayerScratch/>*/}
            </div>
        </div>
    )
}

export default BandDashboard;


