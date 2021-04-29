import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import InputField from "../input-field/InputField";
import Button from "../button/Button";
import {register, useForm} from "react-hook-form";

const tracks = [
    {
        title: 'string',
        user: 'string',
        audioSrc: 'string',
        color: 'string',
    },
];


function AudioPlayer() {
    const [audio, setAudio] = useState(null);
    const [projectName, setProjectName] = useState('');


    const [soundfileIndex, setSoundfileIndex] = useState(0);
    const [soundfileProgress, setSoundfileProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(new Audio(tracks.audioSrc));
    const isReady = useRef(false);


    async function getAudioFile(projectName) {
        try {
            const response = await axios.get(`https://localhost:8444/projects/${projectName}`)
            setAudio(response.data);

        } catch (e) {
            console.error(e);
        }
    }

    async function HandleUserInput(e) {
        const [searchbarValue, setSearchbarValue] = useState('');
        setSearchbarValue(e);
        getAudioFile(e);
    }

    return (
        <>
            <div className="audio-player">
                <h2 className="title">{tracks.title}</h2>
                <h3 className="user">{tracks.user}</h3>
                <form onSubmit={HandleUserInput}>
                    <input
                    type="text"
                    />
                    <Button
                    type="submit"
                    text="get audio"
                    />
                </form>
            </div>
        </>
    );
}

export default AudioPlayer;

