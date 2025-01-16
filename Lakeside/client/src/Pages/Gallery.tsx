import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import Navbar from "../Components/Navbar";
import '../CSS/Gallery.css';

const Gallery: React.FC = () => {
    const [galleryImages, setGalleryImages] = useState<string[]>([]);

    useEffect(() => {
        const storedImages = localStorage.getItem('galleryImages');
        if (storedImages) {
            setGalleryImages(JSON.parse(storedImages));
        }
    }, []);

    return (
        <div className="gallery-page">
            <Link to="/">
                <img className="logo" src={logo} alt="Lakeside Logo" />
            </Link>
            <Navbar />
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