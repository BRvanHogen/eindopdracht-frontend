import React, {useState, useRef} from 'react';
import axios from 'axios';

function UploadAvatar() {
    const uploadedAvatar = useRef(null);
    const avatarUploader = useRef(null);

    const handleAvatarUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader()
            const {current} = uploadedAvatar;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                ref={avatarUploader}
                style={{
                    display: "none"
                }}
            />
            <div
                style={{
                    height: "60px",
                    width: "60px",
                    border: "1px dashed hotpink"
                }}
                onClick={() => avatarUploader.current.click()}
            >
                <img
                    ref={uploadedAvatar}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute"
                    }}
                />
            </div>
            Click to upload Image
        </div>
    );
}

// inline styles should be overridden

export default UploadAvatar;