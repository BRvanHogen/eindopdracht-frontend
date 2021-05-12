// import React, { useState, useEffect, useRef } from 'react';
//
// function AudioPlayerMay() {
//     const audioElement = new Audio(audio source);
//     audioElement.play().then(r => {
//     }).catch(error => {});
//
//     audioElement.pause();
//
//     //source data
//     audioElement.currentTime;
//     audioElement.ended;
//     audioElement.duration;
//
//     const tracks = [
//         {
//             title: string,
//             artist: string,
//             audioSrc: string | import,
//             image: string,
//             color: string,
//         },
//     ];
//
//     const AudioPlayer = ({ tracks }) => {
//         const [trackIndex, setTrackIndex] = useState(0);
//         const [trackProgress, setTrackProgress] = useState(0);
//         const [isPlaying, setIsPlaying] = useState(false);
//
//         const { title, artist, color, image, audioSrc } = tracks[trackIndex];
//
//         const audioRef = useRef(new Audio(audioSrc));
//         const intervalRef = useRef();
//         const isReady = useRef(false);
//
//         const { duration } = audioRef.current;
//
//         const toPrevTrack = () => {
//             console.log('todo');
//         }
//
//         const toNextTrack = () => {
//             console.log('todo');
//         }
//
//         return (
//             <>
//                 <img
//                 src={image}
//                 alt={`placeholder text for ${artist}`}
//                 />
//                 <h2>{title}</h2>
//                 <h3>{artist}</h3>
//             </>
//         );
//     }
//
//     export default AudioPlayer;
//
//     return (
//         <>
//         </>
//     );
// }
//
// export default AudioPlayerMay;