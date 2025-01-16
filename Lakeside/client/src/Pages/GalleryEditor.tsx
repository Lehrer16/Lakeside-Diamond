import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Uploader from '../components/Upload';
import Navbar from '../components/Navbar';
import logo from '../assets/logo.png';
import { Button } from '../components/ui/Button';
import axios from 'axios';
import '../CSS/Gallery.css';

const GalleryEditor = () => {
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [selectedImagesInOrder, setSelectedImagesInOrder] = useState<string[]>([]);
    const [galleryImages, setGalleryImages] = useState<string[]>([]);

    const toggleSelectImage = (image: string, isUploaded: boolean) => {
        setSelectedImages(prevSelectedImages =>
            prevSelectedImages.includes(image)
                ? prevSelectedImages.filter(i => i !== image)
                : [...prevSelectedImages, image]
        );

        setSelectedImagesInOrder(prevSelectedImagesInOrder =>
            selectedImages.includes(image)
                ? prevSelectedImagesInOrder.filter(i => i !== image)
                : [...prevSelectedImagesInOrder, image]
        );
    };

    const handleSave = async () => {
        try {
            await axios.post('/api/gallery/save-images', { images: uploadedImages });
            alert('Images saved successfully!');
        } catch (error) {
            console.error('Error saving images:', error);
            alert('Failed to save images.');
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('/api/gallery/images');
                setGalleryImages(response.data.map((image: { url: string }) => image.url));
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

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
                            key={`uploaded-${index}`}
                            src={image}
                            alt={`Uploaded ${index}`}
                            className={selectedImages.includes(image) ? 'selected' : ''}
                            onClick={() => toggleSelectImage(image, true)}
                        />
                    ))}
                    {galleryImages.map((image, index) => (
                        <img
                            key={`gallery-${index}`}
                            src={image}
                            alt={`Gallery ${index}`}
                            className={selectedImages.includes(image) ? 'selected' : ''}
                            onClick={() => toggleSelectImage(image, false)}
                        />
                    ))}
                </div>
                <Button className='links' variant='outline' onClick={handleSave}>Save</Button>
            </div>
            <div className="content-column">
                <Link to="/">
                    <img className="logo" src={logo} alt="Lakeside Diamond Logo" />
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