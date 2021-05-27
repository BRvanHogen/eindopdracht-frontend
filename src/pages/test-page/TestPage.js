import React from 'react';
import UploadFileScratch from "../../components/upload-file/UploadFileScratch";
import UploadFileStub from "../../components/upload-file/UploadFileStub";
import ControlComponent from "../../components/audio-player/audioplayer-may/ControlComponent";
import AudioPlayerMay from "../../components/audio-player/audioplayer-may/AudioPlayerMay";
import ControlComponentSandbox from "../../components/audio-player/audioplayer-may/ControlComponentSandbox";
import UploadFile from "../../components/upload-file/UploadFile";
import UploadFileMultipart from "../../components/upload-file/UploadFileMultipart";
import InputField from "../../components/input-field/InputField";
import AudioPlayerUploadedFiles from "../../components/audio-player/audioplayer-may/AudioPlayerUploadedFiles";
import ToDoList from "../../components/to-do-list/ToDoList";
import TaskFetcher from "../../components/to-do-list/TaskFetcher";

function TestPage() {
    return (
        <>
            {/*<UploadFileScratch/>*/}
            {/*<UploadFileStub/>*/}
            {/*<ControlComponent/>*/}
            {/*<UploadFile/>*/}
            {/*<AudioPlayerUploadedFiles/>*/}
            <ToDoList/>
            <TaskFetcher/>
            </>
    );
}

export default TestPage;