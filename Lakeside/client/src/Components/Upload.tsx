import React from 'react';
import { generateUploadDropzone } from '@uploadthing/react';

interface UploaderProps {
    endpoint: string;
}

const Uploader: React.FC<UploaderProps> = ({ endpoint, onSuccess }) => {
    const UploadDropzone = generateUploadDropzone({
        url: "/api/uploadthing",
    });



    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
            }}
        />
    );
};

export default Uploader;