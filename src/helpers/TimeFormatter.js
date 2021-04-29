import React from 'react';
import moment from "moment";

function TimeFormatter(time) {
    moment(time).format("MMM Do YY");
    return time;
}

export default TimeFormatter;