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
import {update} from "react-spring";

function ControlComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const soundFiles = [{vampire}, {groove}, {punk}];
    console.log(soundFiles);
    console.log(soundFiles[0]);
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
    currentSoundFile.src = punk;
    console.log(currentSoundFile.src);

    const newSoundFile = new Audio();
    // console.log(currentSoundFile.src);
    //dit mag wel zgn maar werkt niet:
    // soundFiles[playingSoundFile] = currentSoundFile.src;
    //dit mag zgn niet:
    // currentSoundFile.src = soundFiles[playingSoundFile];

    function loadSoundFile(soundFile) {
        //zie log, hier krijgen we gewoon netjes het object
        console.log(soundFile);
        newSoundFile.src = soundFile;
        //maar vervolgens krijgen we hier iets anders (nl. [object%20Object])
        console.log(newSoundFile.src);
        // newSoundFile.play();
    }
    loadSoundFile(soundFiles[playingSoundFile]);


        function PlayPause() {
            if (isPlaying === false) {
                setIsPlaying(true);
                //dit wordt geby-passed, ipv daarvan gaat de useEffect hieronder in
                // currentSoundFile.play();
                // newSoundFile.play();
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

        //dit geeft het object (soundfile). Werkt helaas nog steeds niet. Geeft error (.play() is not a function)
        //als ik het in de useEffect hierboven invoer.
        console.log(soundFiles[playingSoundFile]);
        //en dit geeft 0.
        console.log(playingSoundFile);

//---------WORKING-ON-PROGRESS-BAR-----------------------------------
    function updateProgress() {
        console.log(currentSoundFile.currentTime);
        const {duration, currentTime} = currentSoundFile;
        const progressPercent = (currentTime / duration) * 100;

    //staat deze hier wel goed? functie-aanroep in de functie?
        currentSoundFile.addEventListener('timeupdate', updateProgress);
        const progress = document.getElementById('progress');
        if(progress !== null) {
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
    if(progressContainer !== null) {
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
            {/*<div className={styles['sound-file']}>*/}
            {/*    <audio src={soundFiles[playingSoundFile]} controls/>*/}
            {/*</div>*/}

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
            <span>now playing: track {playingSoundFile && playingSoundFile}</span>

                {/*experimenteer verder door onClick={setProgress} in div progress container te zetten*/}
                <div className={styles['progress-container']}>
            <div className={styles['progress-bar']} id="progress"/>
            </div>
            </div>
        </div>

    );
}

export default ControlComponent;

// VOORTGANG
// oke, nu kan ik met de prev en next buttons een nummer loggen. Wat ga ik hiermee doen? Hoe vertaal
// ik dit naar wat het eigenlijk is (een array van objects), en hoe ga ik dit invoeren in het audio object?
// met andere woorden: geven de buttons nu niet gewoon een nummer en niet meer dan dat? Gaat het audio object
// het nu niet lezen als een primitief datatype (integer) ipv audiobestand? Ik wijs het immers de waarde van
// een getal toe.


//play-pause werkt nog niet, strategie:
// zet terniary operator in return blok {isPlaying ? (<button onClick{()=> PlayPause(false)} </button>) : (<button
// onClick = {() => PlayPause(true)} </button>) waarbij PlayPause de state set van isPlaying.
// de anonieme functie die het nummer afspeelt dan wel pauzeert, wrappen we in een useEffect:

// useEffect(() => {
//     if (isPlaying) {
//         currentSoundFile.play();
//     } else {
//         currentSoundFile.pause();
//     }
// }, [isPlaying]);

// het artikel wat ik er op nasloeg, maakt echter weer gebruik van de Ref-hook. Nog even nakijken of dit voor mijn
// code ook essentieel is of niet. https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks

//verder lijkt ook het doorgeven van de audio-objecten nog niet helemaal lekker te gaan. Lees dit er even op na:
// https://stackoverflow.com/questions/30289217/how-do-i-loop-through-a-javascript-array-of-audio-files

//en anders deze. Hier wordt óók de audio.load() functie gebruikt:
//https://gist.github.com/jimthedev/7047c3258166fcfe83f2d47b835487ad

//nog wat leeswerk:
//https://stackoverflow.com/questions/43577182/react-js-audio-src-is-updating-on-setstate-but-the-audio-playing-doesnt-chang
//"Audio files cannot be changed by just changing the src like an image as there is caching. You will need to load it and play it again."

//over useRef:
//https://dmitripavlutin.com/react-useref-guide/