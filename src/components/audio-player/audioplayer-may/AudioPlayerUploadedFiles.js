import React, {useContext, useEffect, useState} from 'react';
import previous from '../../../assets/pics/audioplayer/previous.png';
import next from '../../../assets/pics/audioplayer/next.png';
import pause from '../../../assets/pics/audioplayer/pause.png';
import play from '../../../assets/pics/audioplayer/play.png';
import replay from '../../../assets/pics/audioplayer/replay.png';
import styles from './control-component.module.css';
import GetFiles from "../../GetFiles";
import axios from 'axios';
import Button from "../../button/Button";
import {ProjectContext} from "../../../context/ProjectContext";


function AudioPlayerUploadedFiles() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [songEnded, toggleSongEnded] = useState(false);
    const [songPaused, toggleSongPaused] = useState(false);
    const [pausedMark, setPausedMark] = useState(0);
    const [playingTime, setPlayingTime] = useState(0);
    const {project} = useContext(ProjectContext);


    const [playlist, setPlaylist] = useState([]);
    const [playingSoundFile, setPlayingSoundFile] = useState(playlist.length - 1);
    const [fetchedFile, setFetchedFile] = useState({});

//----------------------------------------------------------------------------------

async function GetFilesForAudioPlayer(userInput) {
    try {
        const response = await axios.get(`https://localhost:8444/files/player/${userInput}`, {
            // credentials: "same-origin",
            headers: {
                "Content-Type": "audio/mpeg",
            }});

        console.log(response.data);
        setPlaylist(response.data);
        setFetchedFile(response.data);
        console.log(playlist);

    } catch (e) {
        console.error(e);
    }
}

    const currentSoundFile = new Audio();
    if (playlist[0] !== undefined) {
        currentSoundFile.src = playlist[0].url;
        console.log(playlist[0].url);
    }



    //---------------------CONTROLS-TRIAL----------IMPORT-CONTROLCOMPONENTSANDBOX-LATER------------------
function PlayPause() {
        console.log(playlist);
        currentSoundFile.play();
}

    // function PlayPause() {
    //     if (isPlaying === false) {
    //         setIsPlaying(true);
    //         toggleSongEnded(false);
    //         console.log(isPlaying);
    //         currentSoundFile.play();
    //     } else {
    //         console.log('nu is de state', isPlaying);
    //         setIsPlaying(false);
    //         toggleSongEnded(false);
    //         console.log('nu is de state', isPlaying);
    //         currentSoundFile.pause();
    //         console.log(currentSoundFile.currentTime);
    //         toggleSongPaused(true);
    //         console.log(songPaused);
    //         setPausedMark(currentSoundFile.currentTime);
    //         console.log(pausedMark);
    //     }
    // }

    // function GetFiles() {
        return (
            <>
                <Button
                    text="load files"
                    onClick={GetFilesForAudioPlayer}
                    // hier moet link extension worden doorgegeven
                />

                <button
                    type="button"
                    onClick={PlayPause}
                >
                    {isPlaying && !songEnded ? <img className={styles.image} src={pause}/> : <img className={styles.image} src={play}/>}
                </button>
            </>
        );
    }



export default AudioPlayerUploadedFiles;

