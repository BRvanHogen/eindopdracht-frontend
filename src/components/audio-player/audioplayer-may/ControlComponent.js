import React, {useState} from 'react';
import { FaPlay, FaPause, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import previous from '../../../assets/pics/audioplayer/previous.png';
import next from '../../../assets/pics/audioplayer/next.png';
import pause from '../../../assets/pics/audioplayer/pause.png';
import play from '../../../assets/pics/audioplayer/play.png';
import styles from './control-component.module.css';
import vampire from '../../../assets/songs/Akrasial - Vampire 144.mp3';
import groove from '../../../assets/songs/Test - Groove Gm 133.mp3';
import punk from '../../../assets/songs/Test - Punk mp3.mp3';

function ControlComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundFiles = [{vampire}, {groove}, {punk}];
    //deze regel zorgt ervoor dat "now playing:" op track 3 blijft staan volgens mij.
    //misschien moet ik toch met een state gaan werken en die telkens updaten?
    let soundFilesIndex = soundFiles.length;


    //hier moeten we als initialState de huidige array position meegeven
    const [prevTrack, setPrevTrack] = useState(false);
    const [nextTrack, setNextTrack] = useState([false]);
    //------------------------------------------------------------------
    function loadSoundFiles(soundFile) {

    }

    const currentSoundFile = new Audio();
    currentSoundFile.src = soundFiles[{soundFilesIndex}];

    function playPause() {
        setIsPlaying(!isPlaying);
        if(!isPlaying) {
            // currentSoundFile.play();
            // loadSoundFiles();
            currentSoundFile.play();
        } else {
            // currentSoundFile.pause();
            currentSoundFile.pause();
        }
    }

    function prevSoundFile() {
        if(soundFilesIndex === 0) {
            soundFilesIndex = soundFiles.length - 1;
            //loadSoundFiles();
            console.log(soundFilesIndex);
            // playPause();
        } else {
            soundFilesIndex--;
            console.log(soundFilesIndex);
        }
    }

    function nextSoundFile() {
        if(soundFilesIndex > soundFiles.length -2) {
            soundFilesIndex = 0;
            console.log(soundFilesIndex);
        } else {
            soundFilesIndex++;
            console.log(soundFilesIndex);
        }
    }


    return (
        <div className={styles.controls}>
            <button
            type="button"
            onClick={prevSoundFile}
            >
                <img src={previous}/>
            </button>

            <button
                type="button"
                onClick={playPause}
            >
                { isPlaying ? <img src={pause}/> : <img src={play}/> }
            </button>

            <button
                type="button"
                onClick={nextSoundFile}
            >
                <img src={next}/>
            </button>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <span>now playing: track {soundFilesIndex}</span>
        </div>
    );
}

export default ControlComponent;