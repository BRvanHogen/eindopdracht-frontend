import React, { useState, useEffect, useRef } from 'react';
import ControlComponent from "./ControlComponent";


function AudioPlayerMay() {
    const controls = ControlComponent;

    const [isPlaying, togglePlaying] = useState(false);

    function playSoundfile() {

    }

    function pauseSoundfile() {

    }

    function prevSoundfile() {

    }

    function nextSoundfile() {

    }

    return (
        <>
           <div>
               {ControlComponent}
           </div>
        </>
    );
}

export default AudioPlayerMay;