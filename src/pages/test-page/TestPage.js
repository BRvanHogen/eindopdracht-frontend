import React from 'react';
import UploadFileScratch from "../../components/upload-file/UploadFileScratch";
import UploadFileStub from "../../components/upload-file/UploadFileStub";
import ControlComponent from "../../components/audio-player/audioplayer-may/ControlComponent";
import AudioPlayerMay from "../../components/audio-player/audioplayer-may/AudioPlayerMay";
import ControlComponentSandbox from "../../components/audio-player/audioplayer-may/ControlComponentSandbox";

function TestPage() {
    return (
        <>
            <UploadFileScratch/>
            <UploadFileStub/>
            {/*<ControlComponent/>*/}
            <ControlComponentSandbox/>
            </>
    );
}

export default TestPage;