// import React, {useEffect, useState} from 'react';
// import {FaPlay, FaPause, FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa';
// import previous from '../../../assets/pics/audioplayer/previous.png';
// import next from '../../../assets/pics/audioplayer/next.png';
// import pause from '../../../assets/pics/audioplayer/pause.png';
// import play from '../../../assets/pics/audioplayer/play.png';
// import styles from './control-component.module.css';
// import vampire from '../../../assets/songs/Akrasial - Vampire 144.mp3';
// import groove from '../../../assets/songs/Test - Groove Gm 133.mp3';
// import punk from '../../../assets/songs/Test - Punk mp3.mp3';
//
// function ControlComponent() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const soundFiles = [{vampire}, {groove}, {punk}];
//     console.log(soundFiles);
//     console.log(soundFiles[2]);
//     console.log(soundFiles[2].punk);
//     //deze regel zorgt ervoor dat "now playing:" op track 3 blijft staan volgens mij.
//     //misschien moet ik toch met een state gaan werken en die telkens updaten?
//     let soundFilesIndex = soundFiles.length;
//
//     //initial state met of zonder haken? Let op: voer evt. aanpassingen ook door in prev/next functies
//     const [playingSoundFile, setPlayingSoundFile] = useState(soundFiles.length - 1);
//
//     //let even op het verschil tussen deze twee logs. Zou kunnen dat het ergens met toewijzen src
//     //toch nog fout gaat en daarom niet werkt. Src moet echt gewoon hetzelfde zijn als het object en
//     //geen bewerking hiervan.
//     const currentSoundFile = new Audio();
//     console.log(currentSoundFile);
//     //als ik als src soundFiles[0] opgeef, gaat het al fout. Ik krijg dan [object%20Object] terug.
//     //waarom is dit? in de log hierboven (r. 16) gaat het wel gewoon goed.
//     // toch zien de logs er iets anders uit. In r. 16 is het een object (key-value), en in regel 32 hieronder
//     // is het /static/media.Test - bla bla .mp3
//     // het lijkt er dus op dat het echt alleen lukt, als ik de naam van de import meegeef zonder dit eerst weer
//     // in een array of objects te verpakken. Dan zou de functie er anders uit moeten zien, iets van src = {objectNaam}
//     // De vraag is alleen wel: waarom lukt anderen dit in de tutorials wel?
//     //ANTWOORD: ik moest nog eens goed naar het object kijken. Er zat een soort van wrapper omheen. Eraf te krijgen
//     //door .punk (ofwel: .songName) er achter te zetten. Nu pakt ie de source wel. Kijken of er iets van
//     //soundFiles[playingSoundFile].songName van kan maken. Wellicht moet ik dan de objecten in de array aanpassen
//     // met extra key-value pair: name: {name}
//     currentSoundFile.src = soundFiles[playingSoundFile].punk;
//     console.log(punk);
//     console.log(currentSoundFile.src);
//
//     //--------------------------------------------------------
//     const newSoundFile = new Audio();
//
//     function loadSoundFile(soundFile) {
//         //zie log, hier krijgen we gewoon netjes het object
//         console.log(soundFile);
//         newSoundFile.src = soundFile;
//         //maar vervolgens krijgen we hier iets anders (nl. [object%20Object])
//         console.log(newSoundFile.src);
//         newSoundFile.play();
//         // loadSoundFile(soundFiles[playingSoundFile]);
//         // console.log(soundFiles[playingSoundFile]);
//     }
// //----------------------------------------------------------------------------------
//
//         function PlayPause() {
//             if (isPlaying === false) {
//                 setIsPlaying(true);
//                 console.log(isPlaying);
//             } else {
//                 console.log('nu is de state', isPlaying);
//                 setIsPlaying(false);
//                 console.log('nu is de state', isPlaying);
//                 currentSoundFile.pause();
//             }
//         }
//
//         useEffect(() => {
//             if (isPlaying) {
//                 currentSoundFile.play();
//             } else {
//                 currentSoundFile.pause();
//             }
//         }, [isPlaying]);
//
//
// //---------WORKING-ON-PROGRESS-BAR-----------------------------------
//         function updateProgress() {
//             console.log(currentSoundFile.currentTime);
//             const {duration, currentTime} = currentSoundFile;
//             const progressPercent = (currentTime / duration) * 100;
//
//             //staat deze hier wel goed? functie-aanroep in de functie?
//             currentSoundFile.addEventListener('timeupdate', updateProgress);
//             const progress = document.getElementById('progress');
//             if (progress !== null) {
//                 progress.style.width = `${progressPercent}%`;
//             }
//         }
//
//         updateProgress();
//
//
//         function setProgress(e) {
//             const width = progressContainer.clientWidth;
//             //x is for x-axis:
//             const clickX = e.offsetX;
//             console.log(clickX);
//             const duration = currentSoundFile.duration;
//
//             currentSoundFile.currentTime = (clickX / width) * duration;
//         }
//
//         const progressContainer = document.getElementById('progress-container');
//         if (progressContainer !== null) {
//             progressContainer.addEventListener('click', setProgress);
//         }
//
// //-------------------------------------------------------------------
//
//
//         function PrevSoundFile() {
//             if (playingSoundFile === 0) {
//                 setPlayingSoundFile(soundFiles.length - 1);
//                 console.log(playingSoundFile);
//             } else {
//                 setPlayingSoundFile(playingSoundFile - 1);
//                 console.log(playingSoundFile);
//             }
//         }
//
//         function NextSoundFile() {
//             if (playingSoundFile === soundFiles.length - 1) {
//                 setPlayingSoundFile(0);
//                 console.log(playingSoundFile);
//             } else {
//                 setPlayingSoundFile(playingSoundFile + 1);
//                 console.log(playingSoundFile);
//             }
//         }
//
//
//         return (
//             <div className={styles.controls}>
//
//                 <button
//                     type="button"
//                     onClick={PrevSoundFile}
//                 >
//                     <img src={previous}/>
//                 </button>
//
//                 <button
//                     type="button"
//                     onClick={PlayPause}
//                 >
//                     {isPlaying ? <img src={pause}/> : <img src={play}/>}
//                 </button>
//
//                 <button
//                     type="button"
//                     onClick={NextSoundFile}
//                 >
//                     <img src={next}/>
//                 </button>
//
//                 {/*wat raar is: zodra ik song-info in aparte div zette, staat de progress bij aanvang al op 100%*/}
//                 <div className={styles['song-info']}>
//                     <span>now playing: track {playingSoundFile && playingSoundFile}</span>
//
//                     {/*experimenteer verder door onClick={setProgress} in div progress container te zetten*/}
//                     <div className={styles['progress-container']}>
//                         <div className={styles['progress-bar']} id="progress"/>
//                     </div>
//                 </div>
//             </div>
//
//         );
//     }
//
//
// export default ControlComponent;
//
//
// // het artikel wat ik er op nasloeg, maakt echter weer gebruik van de Ref-hook. Nog even nakijken of dit voor mijn
// // code ook essentieel is of niet. https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
//
// //verder lijkt ook het doorgeven van de audio-objecten nog niet helemaal lekker te gaan. Lees dit er even op na:
// // https://stackoverflow.com/questions/30289217/how-do-i-loop-through-a-javascript-array-of-audio-files
//
// //en anders deze. Hier wordt óók de audio.load() functie gebruikt:
// //https://gist.github.com/jimthedev/7047c3258166fcfe83f2d47b835487ad
//
// //nog wat leeswerk:
// //https://stackoverflow.com/questions/43577182/react-js-audio-src-is-updating-on-setstate-but-the-audio-playing-doesnt-chang
// //"Audio files cannot be changed by just changing the src like an image as there is caching. You will need to load it and play it again."
//
// //over useRef:
// //https://dmitripavlutin.com/react-useref-guide/