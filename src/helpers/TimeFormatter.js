import React from 'react';

function TimeFormatter(time)  {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(time).toLocaleDateString('en-US', options)
}

export default TimeFormatter;