import React from 'react';


function SongDetails({songLength, contributors, lastContributionBy, lastContributionLength}) {
    return (
        <>
            <p>song length: {songLength}</p>
            <p>contributors: {contributors}</p>
            <p>last contribution by: {lastContributionBy}</p>
            <p>last contribution length: {lastContributionLength}</p>
        </>
    )
}


export default SongDetails;