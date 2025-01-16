import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Uploader from '../Components/Upload';
import Navbar from '../Components/Navbar';
import logo from '../assets/logo.png';
import '../CSS/Gallery.css';

const GalleryEditor = () => {
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    const handleUploadSuccess = (imageUrl: string) => {
        setUploadedImages(prevImages => [...prevImages, imageUrl]);
    };

    return (
        <div>
            <Link to="/">
                <img className="logo" src={logo} alt="Lakeside Logo" />
            </Link>
            <div className="upload">
            <Uploader endpoint="imageUploader" onSuccess={handleUploadSuccess} />
            </div>
            <Navbar showPhotosButton={false} />

            <h1 className='todo'>Photo Editor</h1>
            
            <div className="photos">
                {uploadedImages.map((image, index) => (
                    <img key={index} className="insta" src={image} alt={`Uploaded Photo ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default GalleryEditor;