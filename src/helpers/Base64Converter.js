import React from 'react';

function Base64Converter (buffer) {
    let bytes = new Uint8Array(buffer);
    let len = buffer.byteLength;
    let binary = "";
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
};


export default Base64Converter;

//vrij recent artikel, probeer deze eens.
//https://pqina.nl/blog/convert-a-file-to-a-base64-string-with-javascript/