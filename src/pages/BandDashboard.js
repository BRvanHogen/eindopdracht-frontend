import React, {useEffect, useState, useContext, createContext} from 'react';
import {Link} from 'react-router-dom';
import styles from '../stylesheets/band-dashboard.module.css';
import SongDetails from "../components/SongDetails";
import ProjectsFetcher from "../components/projects-fetcher/ProjectsFetcher";
import Comment from "../components/comment/Comment";
import Sidebar from "../components/sidebar/Sidebar";
import axios from 'axios';
import GetComment from "../components/comment/GetComment";
import Button from "../components/button/Button";
import TimeFormatter from "../helpers/TimeFormatter";
import {ProjectContext} from "../context/ProjectContext";
import {AuthContext} from "../context/AuthContext";
import ControlComponentSandbox from "../components/audio-player/audioplayer-may/ControlComponentSandbox";
import UploadFileMultipart from "../components/upload-file/UploadFileMultipart";
// import DeleteComment from "../components/comment/DeleteComment";
import DeleteCommentFromDB from "../components/comment/DeleteComment";


function BandDashboard({title, children}) {
    const [comments, setComments] = useState([]);
    const [files, setFiles] = useState([]);

    const {...projectState} = useContext(ProjectContext);
    console.log(projectState);
    const {user} = useContext(AuthContext);
    const projectName = (localStorage.getItem('name'));
    console.log(projectName);

    //------------DOWNLOAD--------------------------------------------
    async function DownloadFile(filename) {
        try {
            console.log('it got to the DownloadFile');
            const response = await axios.get(`https://localhost:8444/files/${filename}`);
            window.open(`https://localhost:8444/files/${filename}`, "_blank");
        } catch (e) {
            console.error(e);
        }
    }

    //--------------COMMENTS--------------------------------------------
    async function FetchComments() {
        try {
            const response = await axios.get('https://localhost:8444/comments')
            console.log(response.data);
            setComments(response.data);

        } catch (e) {
            console.error(e);
        }
    }
//--------------------FILES-------------------------------------------
    async function FetchFiles() {
        try {
            const response = await axios.get('https://localhost:8444/files', {headers: {
                    "Content-Type": "application/json",
                }});

            console.log(response.data);
            setFiles(response.data);

        } catch (e) {
            console.error(e);
        }
    }
  //-------------------------------------------------------------------------

    return (
        <div className={styles.main}>
            {/*deze is nu null want project name en id worden niet opgeslagen in de context*/}

            <div className={styles['header-container']}>
                <h2>{projectName && projectName}</h2>
                <h3>{user && user.username}, created on date</h3>
                <ControlComponentSandbox/>
            </div>

            <div className={styles['bottom-content']}>

                <div className={styles['comment-section-wrapper']}>
                    <div className={styles['comment-action-wrapper']}>
                        <p className={styles['username-post']}>{user && user.username}</p>
                        <Comment className={styles['text-area']}/>
                    </div>

                    <div className={styles['comments-display']}>

                        {comments.map((comment) => {
                            return (
                                <ul>
                                    <div className={styles['single-comment-wrapper']}>
                                        <div className={styles['comment-user-info']}>
                                    <p>{comment.byUser}</p>
                                        </div>

                                        <div className={styles['comment-content']}>
                                    <p>{`'${comment.textareaInput}'`}</p>

                                            <div
                                                className={styles['delete-comment-wrapper']}
                                            >
                                            <i
                                                className={styles['delete-comment']}
                                                // onClick={()=> DeleteComment(comment.id)}
                                                onClick={()=> DeleteCommentFromDB(comment.id)}
                                            >
                                                🗑️
                                            </i>
                                            </div>

                                        </div>

                                        <div className={styles['comment-timestamp']}>
                                            <p>{TimeFormatter(comment.timestamp)}</p>
                                        </div>

                                    </div>
                                </ul>
                            )
                        })}
                        {children}

                        <div className={styles['button-wrapper']}>
                        <Button
                            text="load comments"
                            onClick={FetchComments}
                        />
                        </div>

                    </div>
                </div>

                <div className={styles['upload-section-wrapper']}>

                    <div className={styles['upload-action-wrapper']}>
                        <p className={styles['username-post']}>{user && user.username}</p>
                        <UploadFileMultipart/>
                    </div>

                    <div className={styles['uploads-display']}>
                        {files.map((file)=> {
                            return (
                                <ul>
                                <div className={styles['single-file-wrapper']}>
                                    <p className={styles['file-user-info']}>{user && user.username}</p>
                                    <div className={styles['file-content']}>
                                        <p>{file && file.name}</p>
                                        <p
                                            className={styles['file-download-link']}
                                            onClick={()=>{DownloadFile(file.name)}}
                                        >
                                            download
                                        </p>
                                    </div>
                                </div>
                                </ul>
                            );
                        })}

                        <div className={styles['load-button-wrapper']}>
                        <Button
                        onClick={FetchFiles}
                        text="load files"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BandDashboard;


