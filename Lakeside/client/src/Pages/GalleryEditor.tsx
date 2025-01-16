import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Uploader from '../components/Upload';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import { Button } from '../components/ui/Button';
import '../CSS/Gallery.css';

const GalleryEditor = () => {
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<number[]>([]);
    const [selectedImagesInOrder, setSelectedImagesInOrder] = useState<string[]>([]);

    const toggleSelectImage = (index: number) => {
        setSelectedImages(prevSelectedImages =>
            prevSelectedImages.includes(index)
                ? prevSelectedImages.filter(i => i !== index)
                : [...prevSelectedImages, index]
        );

        setSelectedImagesInOrder(prevSelectedImagesInOrder =>
            selectedImages.includes(index)
                ? prevSelectedImagesInOrder.filter((_, i) => i !== selectedImages.indexOf(index))
                : [...prevSelectedImagesInOrder, uploadedImages[index]]
        );
    };

    const handleSave = () => {
        localStorage.setItem('galleryImages', JSON.stringify(uploadedImages));
        history.push('/gallery');
    };

    return (
        <div className="gallery-editor">
            <div className="uploader-column">
                <h1>Gallery Editor</h1>
                <div className="uploader">
                    <Uploader endpoint="imageUploader" setUploadedImages={setUploadedImages} />
                </div>
                <div className="photos">
                    {uploadedImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Uploaded ${index}`}
                            className={selectedImages.includes(index) ? 'selected' : ''}
                            onClick={() => toggleSelectImage(index)}
                        />
                    ))}
                </div>
                <Button className='links' variant='outline' onClick={handleSave}>Save</Button>
            </div>
            <div className="content-column">
                <Link to="/">
                    <img className="logo" src={logo} alt="Lakeside Logo" />
                </Link>
                <Navbar showPhotosButton={false} />
                <div className="photos">
                    {selectedImagesInOrder.map((image, index) => (
                        <img key={index} src={image} alt={`Selected ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryEditor;