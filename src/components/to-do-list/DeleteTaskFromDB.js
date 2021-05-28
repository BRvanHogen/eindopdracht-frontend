import React, {useState} from 'react';
import axios from 'axios';
import {ProjectContext} from "../../context/ProjectContext";
import LoadingRipple from "../loading-disc/loadingRipple";


async function DeleteTaskFromDB(taskId) {
    // const [loading, toggleLoading] = useState(false);
    const projectName = localStorage.getItem('name');
    try {
        // toggleLoading(true);
        console.log('at least I got to the try-block!');
        await axios.delete(`https://localhost:8444/tasks/${projectName}/all-tasks/${taskId}`);
        alert('task has been deleted');
        window.location.reload(true);
    } catch (e) {
        console.error(e);
    }

    return(
        <>
            {/*{loading === true && <LoadingRipple/> }*/}
        </>
    );

}

export default DeleteTaskFromDB;