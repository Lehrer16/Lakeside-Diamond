import { useState, useEffect } from 'react';
import { Button } from '../Components/ui/button';
import Uploader from '../Components/Upload';
import axios from 'axios';

const Editor = () => {
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
                await axios.post('/api/gallery/save-public', { images: selectedImages });
                console.log('Gallery updated successfully!');
            } catch (error) {
                console.error('Error saving images:', error);
                alert('Failed to save images.');
            }
        } else {
            console.log('Gallery not updated :(');
        }
    };

    const handleClear = () => {
        setSelectedImages([]);
        setSelectedImagesInOrder([]);
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

                console.log('Selected images deleted successfully!');
            } catch (error) {
                console.error('Error deleting images: ', error);
                alert('Failed to delete images :(');
            }
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('/api/gallery/images');
                setGalleryImages(response.data.map((image: { url: string }) => image.url));
            } catch (error) {
                console.error('Error fetching images :( ', error);
            }
        };

        fetchImages();
    }, []);

    return (
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
                        {selectedImages.includes(image) && (
                            <div className="selection-number">
                                {selectedImagesInOrder.indexOf(image) + 1}
                            </div>
                        )}
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
                        {selectedImages.includes(image) && (
                            <div className="selection-number">
                                {selectedImagesInOrder.indexOf(image) + 1}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Button className='save' variant='outline' onClick={handleSave}>Save</Button>
            <div>
                <Button className='links' variant='outline' onClick={handleClear}>clear</Button>
                <Button className='delete' variant='destructive' onClick={handleDeleteSelected}>Delete</Button>
            </div>
        </div>
    );
};

export default Editor;