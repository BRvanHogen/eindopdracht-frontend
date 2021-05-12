import React, {useEffect, useState} from 'react';
import punkAm from '../../assets/songs/Test - Punk Am.wav';
import punkMp3 from '../../assets/songs/Test - Punk mp3.mp3';


function AudioPlayerScratch() {
    // const audioEl = document.getElementsByClassName("audio-element");
    // audioEl.play();


    return (
        <>
            {/*<button onClick={AudioPlayerScratch}>play audio</button>*/}
            <audio className="audio-element" src={punkMp3} controls/>
            {/*<button onClick={togglePlaying(true)}>play</button>*/}
            {/*<button onClick={togglePlaying(false)}>pause</button>*/}
        </>
    );
}

export default AudioPlayerScratch;

//STRATEGIE
// - src moet dan een get request naar de database met soundfiles zijn
// - over de items moet gemapt worden, en net als bij BandDashboard moet een ul met een template worden gereturnd.
// - in dit template staat dan de regel code hierboven (audio className controls)
//      - je krijgt dan wel vrij lelijk alle players onder elkaar. Het is natuurlijk mooier als ik dit in 1 player
//        kan integreren