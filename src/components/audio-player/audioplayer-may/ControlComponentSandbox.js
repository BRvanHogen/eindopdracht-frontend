import React, {useEffect, useState} from 'react';
import {FaPlay, FaPause, FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';
import previous from '../../../assets/pics/audioplayer/previous.png';
import next from '../../../assets/pics/audioplayer/next.png';
import pause from '../../../assets/pics/audioplayer/pause.png';
import play from '../../../assets/pics/audioplayer/play.png';
import replay from '../../../assets/pics/audioplayer/replay.png';
import styles from './control-component.module.css';
import vampire from '../../../assets/songs/Akrasial - Vampire 144.mp3';
import groove from '../../../assets/songs/Test - Groove Gm 133.mp3';
import punk from '../../../assets/songs/Test - Punk mp3.mp3';


function ControlComponentSandbox() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [songEnded, toggleSongEnded] = useState(false);
    const [songPaused, toggleSongPaused] = useState(false);
    const [pausedMark, setPausedMark] = useState(0);
    const [playingTime, setPlayingTime] = useState(0);
    const soundFiles = [{name: 'gruwelijk gitaarstukje', data: vampire}, {
        name: 'groove',
        data: groove
    }, {name: 'speed metal', data: punk}];
    const [playingSoundFile, setPlayingSoundFile] = useState(soundFiles.length - 1);

    const currentSoundFile = new Audio();
    currentSoundFile.src = soundFiles[playingSoundFile].data;

//----------------------------------------------------------------------------------
    function PlayPause() {
        if (isPlaying === false) {
            setIsPlaying(true);
            toggleSongEnded(false);
            console.log(isPlaying);
        } else {
            console.log('nu is de state', isPlaying);
            setIsPlaying(false);
            toggleSongEnded(false);
            console.log('nu is de state', isPlaying);
            currentSoundFile.pause();
            console.log(currentSoundFile.currentTime);
            toggleSongPaused(true);
            console.log(songPaused);
            setPausedMark(currentSoundFile.currentTime);
            console.log(pausedMark);
        }
    }

    const songFinished = setInterval(() => {
        if (currentSoundFile.ended === true) {
            toggleSongEnded(true);
            console.log('einde');
            clearInterval(songFinished);
        }
    }, 1000);

    useEffect(() => {
        if(songPaused) {
            currentSoundFile.currentTime = pausedMark;
        } else {
            currentSoundFile.currentTime = 0;
        }

        if (isPlaying) {
            toggleSongEnded(false);
            currentSoundFile.play();
        } else {
            toggleSongEnded(false);
            currentSoundFile.pause();
        }
    }, [isPlaying]);


//---------WORKING-ON-PROGRESS-BAR-----------------------------------
    function updateProgress() {
        const {duration, currentTime} = currentSoundFile;
        const progressPercent = (currentTime / duration) * 100;

        // const songTimer = setInterval(()=> {
        // if(currentTime !== 0) {
        //     setPlayingTime(currentTime);
        // }}, 500);
        //
        // clearInterval();

        //staat deze hier wel goed? functie-aanroep in de functie?
        currentSoundFile.addEventListener('timeupdate', updateProgress);
        const progress = document.getElementById('progress');
        if (progress !== null) {
            progress.style.width = `${progressPercent}%`;
        }
    }

    updateProgress();


    function setProgress(e) {
        console.log(e);
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        console.log(clickX);
        const duration = currentSoundFile.duration;
        if (!isFinite(currentSoundFile.currentTime)) {
            currentSoundFile.currentTime = (clickX / width) * duration;
            console.log(currentSoundFile.currentTime);
        }
    }

    const progressContainer = document.getElementById('progress-container');
    if (progressContainer !== null) {
        progressContainer.addEventListener('click', setProgress);
    }

//-------------------------------------------------------------------
    function PrevSoundFile() {
        setPausedMark(0);
        if (isPlaying === true) {
            currentSoundFile.pause();
            setIsPlaying(false);
            toggleSongEnded(false);
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
        setPausedMark(0);
        if (isPlaying === true) {
            currentSoundFile.pause();
            setIsPlaying(false);
            toggleSongEnded(false);
        }
        if (playingSoundFile === soundFiles.length - 1) {
            setPlayingSoundFile(0);
            console.log(playingSoundFile);
        } else {
            setPlayingSoundFile(playingSoundFile + 1);
            console.log(playingSoundFile);
        }
    }

    function ReplaySoundFile() {
        setPausedMark(0);
        setIsPlaying(true);
        currentSoundFile.currentTime = 0;
        currentSoundFile.play();
    }

//-------------------------------------------------------------------------------------

    return (
        <div className={styles.controls}>

            <button
                type="button"
                onClick={PrevSoundFile}
            >
                <img
                    className={styles.image}
                    src={previous}/>
            </button>

            <button
                type="button"
                onClick={PlayPause}
            >
                {isPlaying && !songEnded ? <img className={styles.image} src={pause}/> : <img className={styles.image} src={play}/>}
            </button>

            {isPlaying ? (
                <button
                    type="button"
                    onClick={ReplaySoundFile}
                >
                    <img
                        className={styles.image}
                        src={replay}
                    />
                </button>) : (
                <button
                    type="button"
                    className={styles['disabled-button']}
                    disabled={true}
                >
                    <img
                        className={styles['image-disabled']}
                        src={replay}
                    />
                </button>
            )
            }

            <button
                type="button"
                onClick={NextSoundFile}
            >
                <img
                    className={styles.image}
                    src={next}/>
            </button>


            {/*wat raar is: zodra ik song-info in aparte div zette, staat de progress bij aanvang al op 100%*/}
            <div className={styles['song-info']}>
                <span>now playing: {soundFiles[playingSoundFile] && soundFiles[playingSoundFile].name}</span>

                <div className={styles['progress-container']} id="progress-container">
                    <div className={styles['progress-bar']} id="progress"/>
                </div>
                <p>{playingTime && playingTime}</p>
            </div>
        </div>

    );
}

export default ControlComponentSandbox;

//BUGS
//setProgress functie overreact. Geeft te veel meldingen, weet niet waarom. Krijg de positie van nummer wel gelogd,
//maar het setten van currentTime werkt (nog) niet.

//bij pauzeren nummer en daarna weer afspelen, begint 'ie weer opnieuw.
//misschien door in PlayPause functie iets van:
// if (isPaused) {currentSoundFile.playFromPausedMark}

// even verder denken: proberen of ik na klikken op pause de dan huidige positie kan loggen.
// Deze waarde moet ik vervolgens hergebruiken ....
// misschien hier nog wat uithalen: https://stackoverflow.com/questions/13002935/html5-audio-start-over/22837875

// if(audioSupport.duration > 0 && !audioSupport.paused){
//
//     //already playing
//     audioSupport.pause();
//     audioSupport.currentTime = 0;
//     audioSupport.play();
//
// }else{
//
//     //not playing
//
//     audioSupport.play();
//
// }


// zoiets? Het probleem is wel dat ik pausedMark midden in de PlayPause functie aanmaak en daarom niet naar
// de useEffect kan halen. Of ik moet ook hier weer een lege state voor aanmaken:
// const [pausedMark, setPausedMark] = useState (0);

// if(songIsPaused) {
//     currentSoundFile.currentTime = pausedMark;
// } else {
//     currentSoundFile.currentTime = 0;
// }

// oke, dat werkt nu. Nieuw probleem: hij slaat de tijdsmarkeringen op, ook als je prev/next song doet.
// bij iedere prev/next navigatie moet pausedMark weer op 0 worden gezet.
//OPGELOST, setPausedMark(0) bovenaan de functie (dus voor if/else blok) zodat deze sowieso op 0 wordt
//gezet als er op de prev/next knoppen wordt geklikt


//Playing Time weergeven:
// moet ook weer met state/
// const [playingTime, SetPlayingTime] = useState(0);
//SetPlayingTime in de functie updateProgress
// playingTime als p-element in return blok
//is gelukt om het weer te geven. Zie uitgecommente deel in functie updateProgress. Probleem is dat hierdoor
//de playPause functie niet meer naar behoren werkte.
// straks/later weer even naar kijken.

// nog toevoegen: knoppen om nummer opnieuw te laten beginnen.
// deze knoppen moeten de currentSoundFile.currentTime op 0 zetten.
// deze functie werkt nu, maar alleen de eerste keer. Het gaat dus zo:
// play > replay > pause = so far so good. Dan:
// play > replay > pause = pause werkt niet!
