import React from 'react';
import UploadFileScratch from "../../components/upload-file/UploadFileScratch";
import UploadFileStub from "../../components/upload-file/UploadFileStub";
import ControlComponent from "../../components/audio-player/audioplayer-may/ControlComponent";
import AudioPlayerMay from "../../components/audio-player/audioplayer-may/AudioPlayerMay";

function TestPage() {
    return (
        <>
            <UploadFileScratch/>
            <UploadFileStub/>
            <ControlComponent/>
            {/*<AudioPlayerMay/>*/}
        </>
    );
}

export default TestPage;;