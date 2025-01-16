import React from 'react';
import { generateUploadDropzone } from '@uploadthing/react';

interface UploaderProps {
    endpoint: string;
    onSuccess: (imageUrl: string) => void;
}

const Uploader: React.FC<UploaderProps> = ({ endpoint, onSuccess }) => {
    const UploadDropzone = generateUploadDropzone({
        url: "/api/uploadthing",
    });

    const handleUploadComplete = (res: any) => {
        if (res && res.length > 0) {
            onSuccess(res[0].url);
        }
    };

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={handleUploadComplete}
        />
    );
};

export default Uploader;