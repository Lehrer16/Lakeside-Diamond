import React from 'react';
import { generateUploadDropzone } from '@uploadthing/react';
import axios from 'axios';

interface UploaderProps {
    endpoint: string;
    setUploadedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const Uploader: React.FC<UploaderProps> = ({ endpoint, setUploadedImages }) => {
    const UploadDropzone = generateUploadDropzone({
        url: "/api/uploadthing",
    });

    const sendToDatabase = async (urls: string[]) => {
        try {
            await axios.post('/api/gallery/save-images', { images: urls });
            console.log('Successfully saved uploads to the database');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <UploadDropzone
            className="dropzone"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                const newImages = res.map(file => file.url);
                setUploadedImages(prevImages => [...prevImages, ...newImages]);
                sendToDatabase(newImages);
                console.log("Upload URL: ", res.map(file => file.url));
            }}
        />
    );
};

export default Uploader;