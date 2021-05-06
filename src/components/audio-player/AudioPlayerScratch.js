import React, {useEffect, useState} from 'react';
import punkAm from '../../assets/songs/Test - Punk Am.wav';
import punkMp3 from '../../assets/songs/Test - Punk mp3.mp3';


function AudioPlayerScratch() {
    // const audioEl = document.getElementsByClassName("audio-element");
    // audioEl.play();


    return (
        <>
            {/*<button onClick={AudioPlayerScratch}>play audio</button>*/}
            <audio className="audio-element" src={punkMp3} controls autoPlay/>
            {/*<button onClick={togglePlaying(true)}>play</button>*/}
            {/*<button onClick={togglePlaying(false)}>pause</button>*/}
        </>
    );
}

export default AudioPlayerScratch;