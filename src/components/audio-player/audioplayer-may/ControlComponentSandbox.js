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
        // console.log(currentSoundFile.currentTime);
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
        if (isPlaying === true) {
            currentSoundFile.pause();
        }
            if (playingSoundFile === 0) {
                setPlayingSoundFile(soundFiles.length - 1);
                console.log(playingSoundFile);
            } else {
                setPlayingSoundFile(playingSoundFile - 1);
                console.log(playingSoundFile);
            }
    }

    function NextSoundFile() {
        if (isPlaying === true) {
            currentSoundFile.pause();
        }
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
                <div className={styles['progress-container']} onClick={()=> setProgress}>
                    <div className={styles['progress-bar']} id="progress"/>
                </div>
                <p>{currentSoundFile && currentSoundFile.currentTime}</p>
            </div>
        </div>

    );
}


export default ControlComponentSandbox;

//BUGS
//----------------------------------------------------------------------
//SONG FINISHED: button back to 'play'

// create state: const [songEnded, ToggleSongEnded] = useState(false);
// if/else
// zoiets:         else (currentSoundFile.ended) {
//             setIsPlaying(!=isPlaying);
//         }

//nog even kijken of dit in useEffect of in PlayPause moet
//----------------------------------------------------------------------

//ALS USER NIET OP PAUSE SONG DRUKT EN VOLGENDE KLIKT, SPELEN TWEE FILES DOOR ELKAAR
//oorzaak:
// bij prev en next buttons wordt niet eerst gecheckt of er al iets speelt. Deze check
// moet ik inbouwen en als de conditie waar blijkt te zijn, moet currentSoundFile (toch?) gestopt worden
// IS NU OPGELOST
// wel moet de user een keer extra op de play knop drukken. Afspelen gaat dus niet automatisch, en wat
// extra verwarrend is, is dat de knop op pauze blijft staan alsof er nog iets aan het afspelen is.
// NIEUW PROBLEEM: je kan nu niet op volgende drukken, tenzij er iets afspeelt
// GEFIXT, eerste-if-statement apart gezet (niet om de rest van de functie heen)
