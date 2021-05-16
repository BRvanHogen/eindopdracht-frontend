import React, {useEffect, useState} from 'react';
import {FaPlay, FaPause, FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';
import previous from '../../../assets/pics/audioplayer/previous.png';
import next from '../../../assets/pics/audioplayer/next.png';
import pause from '../../../assets/pics/audioplayer/pause.png';
import play from '../../../assets/pics/audioplayer/play.png';
import styles from './control-component.module.css';
import vampire from '../../../assets/songs/Akrasial - Vampire 144.mp3';
import groove from '../../../assets/songs/Test - Groove Gm 133.mp3';
import punk from '../../../assets/songs/Test - Punk mp3.mp3';

function ControlComponentSandbox() {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundFiles = [{name: 'vampire', data: vampire}, {name: 'groove', data: groove}, {name: 'punk', data: punk}];
    console.log(soundFiles[0].name);
    console.log(soundFiles[0].data);
    //deze regel zorgt ervoor dat "now playing:" op track 3 blijft staan volgens mij.
    //misschien moet ik toch met een state gaan werken en die telkens updaten?
    let soundFilesIndex = soundFiles.length;

    //initial state met of zonder haken? Let op: voer evt. aanpassingen ook door in prev/next functies
    const [playingSoundFile, setPlayingSoundFile] = useState(soundFiles.length - 1);

    //let even op het verschil tussen deze twee logs. Zou kunnen dat het ergens met toewijzen src
    //toch nog fout gaat en daarom niet werkt. Src moet echt gewoon hetzelfde zijn als het object en
    //geen bewerking hiervan.
    const currentSoundFile = new Audio();
    console.log(currentSoundFile);

    currentSoundFile.src = soundFiles[playingSoundFile].data;
    console.log(currentSoundFile.src);

    //--------------------------------------------------------
    const newSoundFile = new Audio();

    function loadSoundFile(soundFile) {
        //zie log, hier krijgen we gewoon netjes het object
        console.log(soundFile);
        newSoundFile.src = soundFile;
        //maar vervolgens krijgen we hier iets anders (nl. [object%20Object])
        console.log(newSoundFile.src);
        newSoundFile.play();
        // loadSoundFile(soundFiles[playingSoundFile]);
        // console.log(soundFiles[playingSoundFile]);
    }
//----------------------------------------------------------------------------------

    function PlayPause() {
        if (isPlaying === false) {
            setIsPlaying(true);
            console.log(isPlaying);
        } else {
            console.log('nu is de state', isPlaying);
            setIsPlaying(false);
            console.log('nu is de state', isPlaying);
            currentSoundFile.pause();
        }
    }

    useEffect(() => {
        if (isPlaying) {
            currentSoundFile.play();
        } else {
            currentSoundFile.pause();
        }
    }, [isPlaying]);


//---------WORKING-ON-PROGRESS-BAR-----------------------------------
    function updateProgress() {
        console.log(currentSoundFile.currentTime);
        const {duration, currentTime} = currentSoundFile;
        const progressPercent = (currentTime / duration) * 100;

        //staat deze hier wel goed? functie-aanroep in de functie?
        currentSoundFile.addEventListener('timeupdate', updateProgress);
        const progress = document.getElementById('progress');
        if (progress !== null) {
            progress.style.width = `${progressPercent}%`;
        }
    }

    updateProgress();


    function setProgress(e) {
        const width = progressContainer.clientWidth;
        //x is for x-axis:
        const clickX = e.offsetX;
        console.log(clickX);
        const duration = currentSoundFile.duration;

        currentSoundFile.currentTime = (clickX / width) * duration;
    }

    const progressContainer = document.getElementById('progress-container');
    if (progressContainer !== null) {
        progressContainer.addEventListener('click', setProgress);
    }

//-------------------------------------------------------------------


    function PrevSoundFile() {
        if (playingSoundFile === 0) {
            setPlayingSoundFile(soundFiles.length - 1);
            console.log(playingSoundFile);
        } else {
            setPlayingSoundFile(playingSoundFile - 1);
            console.log(playingSoundFile);
        }
    }

    function NextSoundFile() {
        if (playingSoundFile === soundFiles.length - 1) {
            setPlayingSoundFile(0);
            console.log(playingSoundFile);
        } else {
            setPlayingSoundFile(playingSoundFile + 1);
            console.log(playingSoundFile);
        }
    }


    return (
        <div className={styles.controls}>

            <button
                type="button"
                onClick={PrevSoundFile}
            >
                <img src={previous}/>
            </button>

            <button
                type="button"
                onClick={PlayPause}
            >
                {isPlaying ? <img src={pause}/> : <img src={play}/>}
            </button>

            <button
                type="button"
                onClick={NextSoundFile}
            >
                <img src={next}/>
            </button>

            {/*wat raar is: zodra ik song-info in aparte div zette, staat de progress bij aanvang al op 100%*/}
            <div className={styles['song-info']}>
                <span>now playing: {soundFiles[playingSoundFile] && soundFiles[playingSoundFile].name}</span>

                {/*experimenteer verder door onClick={setProgress} in div progress container te zetten*/}
                <div className={styles['progress-container']}>
                    <div className={styles['progress-bar']} id="progress"/>
                </div>
                <p>{currentSoundFile && currentSoundFile.currentTime}</p>
            </div>
        </div>

    );
}


export default ControlComponentSandbox;


//SONG FINISHED: button back to 'play'

// create state: const [songEnded, ToggleSongEnded] = useState(false);
// if/else