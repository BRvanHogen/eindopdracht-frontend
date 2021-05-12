import React, {useEffect, useState} from 'react';

function Base64Converter (userInput) {

    const reader = new FileReader();
    reader.onloadend = () => {
        const base64String = userInput
            .replace("data:", "")
            .replace(/^.+,/, "");
        console.log(base64String);
    }
    if (userInput) {
        reader.readAsDataURL(userInput);
    }
        }



export default Base64Converter;

//vrij recent artikel, probeer deze eens.
//https://pqina.nl/blog/convert-a-file-to-a-base64-string-with-javascript/