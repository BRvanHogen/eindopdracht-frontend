import React, {useEffect, useState, useContext} from 'react';
import {Link} from 'react-router-dom';
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
import {AuthContext} from "../context/AuthContext";
import ControlComponentSandbox from "../components/audio-player/audioplayer-may/ControlComponentSandbox";


function BandDashboard({title, children}) {
    const [comments, setComments] = useState([]);
    const {...projectState} = useContext(ProjectContext);
    console.log(projectState);
    const {user} = useContext(AuthContext);
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
            {/*deze is nu null want project name en id worden niet opgeslagen in de context*/}

            <div className={styles['header-container']}>
                <h2>{projectName && projectName}</h2>
                <h3>{user && user.username}, created on date</h3>
                <ControlComponentSandbox/>
            </div>

            <div className={styles['bottom-content']}>

                <div className={styles['comment-wrapper']}>
                    <div className={styles['comment-action-wrapper']}>
                        <p className={styles['username-post']}>{user && user.username}</p>
                        <Comment className={styles['text-area']}/>
                    </div>

                    <div className={styles['comments-display']}>

                        {comments.map((comment) => {
                            return (
                                <ul>
                                    <p>{TimeFormatter(comment.timestamp)}</p>
                                    <p>{comment.textareaInput}</p>
                                </ul>
                            )
                        })}
                        {children}

                        <Button
                            text="load comments"
                            onClick={FetchComments}
                        />

                    </div>
                </div>

                <div className={styles['upload-wrapper']}>
                    {/*<SongDetails*/}
                    {/*    songLength={'03:34'}*/}
                    {/*    contributors={'Bob'}*/}
                    {/*    lastContributionBy={'Bob'}*/}
                    {/*    lastContributionLength={'00:45'}*/}
                    {/*/>*/}
                    <UploadFile/>
                </div>
            </div>
        </div>
    )
}

export default BandDashboard;


