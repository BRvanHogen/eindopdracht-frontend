import React from "react";
import Avatar from "react-avatar-edit";
import { useState } from "react";

function AvatarCropper() {
    const [preview, setPreview] = useState(null);
    function onClose() {
        setPreview(null);
    }
    function onCrop(pv) {
        setPreview(pv);
    }
    function onBeforeFileLoad(eventObject) {
        if (eventObject.target.files[0].size > 2000000) {
            alert("File should be < 244.14MB");
            eventObject.target.value = "";
        }
    }
    return (
        <div>
            <Avatar
                width={100}
                height={100}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={null}
            />
            <br/>
            {preview && (
                <>
                    <img src={preview} alt="Preview" />
                    <a href={preview} download="avatar">
                        Download image
                    </a>
                </>
            )}
        </div>
    );
}
export default AvatarCropper;