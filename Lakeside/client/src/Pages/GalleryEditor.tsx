import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../assets/logo.png';
import '../CSS/Gallery.css';
import Editor from '../Components/Editor';

const GalleryEditor = () => {
    const [selectedImagesInOrder, setSelectedImagesInOrder] = useState<string[]>([]);

    const handleSelectedImagesChange = (selectedImagesInOrder: string[]) => {
        setSelectedImagesInOrder(selectedImagesInOrder);
    };

    return (
        <div className="gallery-editor">
            <Editor onSelectedImagesChange={handleSelectedImagesChange} />
            <div className="content-column">
                <Link to="/">
                    <img className="logo" src={logo} alt="Lakeside Diamond Logo" />
                </Link>
                <Navbar showHomeButton={false} />
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