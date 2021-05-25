import React, { createContext, useState } from 'react';
import axios from 'axios';
import GetFiles from "../components/GetFiles";

export const PlaylistContext = createContext([{}]);

function PlaylistContextProvider({children}) {
    const [playlistState, setPlaylistState] = useState({
        playlist: null,
        status: 'pending',
    });

    GetFiles();

    setPlaylistState([{

    }]);



    function SetPlaylist() {

    }

    function ExitPlaylist() {

    }

    const data = {
        ...playlistState,
        set: SetPlaylist,
        exit: ExitPlaylist,
    }


    return (
        <PlaylistContext.Provider value={data}>
            {children}
        </PlaylistContext.Provider>
    );
}

export default PlaylistContextProvider;