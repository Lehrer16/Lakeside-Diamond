import React from 'react';
import { generateUploadDropzone } from '@uploadthing/react';


interface UploaderProps {
    endpoint: string;
    setUploadedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const Uploader: React.FC<UploaderProps> = ({ endpoint, setUploadedImages }) => {
    const UploadDropzone = generateUploadDropzone({
        url: "/api/uploadthing",
    });

    return (
        <UploadDropzone
            className="dropzone"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                const newImages = res.map(file => file.url);
                setUploadedImages(prevImages => [...prevImages, ...newImages]);
                console.log("Upload URL: ", res.map(file => file.url));
            }}
        />
    );
};

export default Uploader;