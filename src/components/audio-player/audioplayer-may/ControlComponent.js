import React, {useState} from 'react';
import { FaPlay, FaPause, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

function ControlComponent() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [prevTrack, setPrevTrack] = useState(false);
    const [nextTrack, setNextTrack] = useState(false);
    const [trackIndex, setTrackIndex] = useState([0]);

    function playPause() {
        setIsPlaying(!isPlaying);
    }


    return (
        <>
            <button
            type="button"
            onClick={setPrevTrack}
            >
                <FaAngleDoubleLeft/>
            </button>

            <button
                type="button"
                onClick={playPause}
            >
                {isPlaying ? <FaPlay/> : <FaPause/>}
            </button>

            <button
                type="button"
                onClick={setNextTrack}
            >
                <FaAngleDoubleRight/>
            </button>
            <span>track {trackIndex}</span>
        </>
    );
}

export default ControlComponent;