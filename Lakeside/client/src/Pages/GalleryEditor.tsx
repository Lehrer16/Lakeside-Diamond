import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Uploader from '../Components/Upload';
import Navbar from '../Components/Navbar';
import logo from '../assets/logo.png';
import { Button } from '../Components/ui/button';
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
    if (window.confirm('Are you sure you want to update the Gallery?')) {
        try {
            await axios.post('/api/gallery/delete-all-public', { images: selectedImages });
            console.log('Images deleted successfully!');
            await axios.post('/api/gallery/save-public', { images: selectedImages });
            console.log('Gallery updated successfully!');
        } catch (error) {
            console.error('Error saving images:', error);
            alert('Failed to save images.');
        }
    } else {console.log('Gallery not updated!');}
    };

    const handleDeleteSelected = async () => {
        if (window.confirm('Are you sure you want to delete the selected images?')) {
            try {
                const deletePromises = selectedImages.map(image => 
                    axios.post('/api/gallery/delete-image', { image })
                );
                await Promise.all(deletePromises);

                const updatedUploadedImages = uploadedImages.filter(img => !selectedImages.includes(img));
                const updatedGalleryImages = galleryImages.filter(img => !selectedImages.includes(img));

                setUploadedImages(updatedUploadedImages);
                setGalleryImages(updatedGalleryImages);
                setSelectedImages([]);
                setSelectedImagesInOrder([]);

                alert('Selected images deleted successfully!');
            } catch (error) {
                console.error('Error deleting images:', error);
                alert('Failed to delete images.');
            }
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
                <div className="editorPhotos">
                    {uploadedImages.map((image, index) => (
                        <div key={`uploaded-${index}`} className="photo-container">
                            <img
                                src={image}
                                alt={`Uploaded ${index}`}
                                className={selectedImages.includes(image) ? 'selected' : ''}
                                onClick={() => toggleSelectImage(image, true)}
                            />
                        </div>
                    ))}
                    
                    {galleryImages.map((image, index) => (
                        <div key={`gallery-${index}`} className="photo-container">
                            <img
                                src={image}
                                alt={`Gallery ${index}`}
                                className={selectedImages.includes(image) ? 'selected' : ''}
                                onClick={() => toggleSelectImage(image, false)}
                            />
                        </div>
                    ))}
                </div>
                <div>
                <Button className='links' variant='outline' onClick={handleSave}>Save</Button>
                <Button className='delete' variant='destructive' onClick={handleDeleteSelected}>Delete</Button>
                </div>
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