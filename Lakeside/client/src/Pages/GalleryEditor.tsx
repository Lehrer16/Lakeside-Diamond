import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import logo from '../assets/logo.png';
import '../CSS/Gallery.css';
import Editor from '../Components/Editor';

const GalleryEditor = () => {
    return (
        <div className="gallery-editor">
            <Editor />
            <div className="content-column">
                <Link to="/">
                    <img className="logo" src={logo} alt="Lakeside Diamond Logo" />
                </Link>
                <Navbar showHomeButton={false} />
                <div className="photos">
                    {/* You can add any additional content here if needed */}
                </div>
            </div>
        </div>
    );
};

export default GalleryEditor;