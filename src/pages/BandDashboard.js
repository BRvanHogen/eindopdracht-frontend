import React, {useEffect, useState} from 'react';
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

function BandDashboard({title, children}) {
    const [comments, setComments] = useState([]);

    //display comments on screen
//import axios, async function, try/catch
//useEffect: dependencies = post-request (comment)

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
        <>
            <p>klik <Link to="/projects">hier</Link> voor de projectportal</p>
            <Link to="/">uitloggen</Link>

            <h2>{title}</h2>
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
                           <p>{comment.timestamp}</p>
                           <p>{comment.textareaInput}</p>
                       </ul>
                    )
                })}
                    {children}
            </div>

            <div className={styles['song-details']}>
                <SongDetails
                songLength={'03:34'}
                contributors={'Bob, Thalys'}
                lastContributionBy={'Bob'}
                lastContributionLength={'00:45'}
                />
                <UploadFile/>
            </div>
        </>
    )
}

export default BandDashboard;


