import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import Navbar from '../Components/Navbar';
import '../CSS/Gallery.css';

const Gallery: React.FC = () => {
    const [galleryImages, setGalleryImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('/api/gallery/get-public');
                setGalleryImages(response.data.map((image: { url: string }) => image.url));
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        console.log('Gallery Images:', galleryImages);
    }, [galleryImages]);

    return (
        <div className="gallery-page">
            <Link to="/">
                <img className="logo" src={logo} alt="Lakeside Logo" />
            </Link>
            <Navbar showPhotosButton={false} />
            <div className="gallery">
                <div className="photos">
                    {galleryImages.map((image, index) => (
                        <img key={index} src={image} alt={`Gallery ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;