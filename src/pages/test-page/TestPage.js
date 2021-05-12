import React from 'react';
import UploadFileScratch from "../../components/upload-file/UploadFileScratch";
import UploadFileStub from "../../components/upload-file/UploadFileStub";
import ControlComponent from "../../components/audio-player/audioplayer-may/ControlComponent";

function TestPage() {
    return (
        <>
            <UploadFileScratch/>
            <UploadFileStub/>
            <ControlComponent/>
        </>
    );
}

export default TestPage;;