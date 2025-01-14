import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Components/ui/button";

interface NavbarProps {
  showHomeButton?: boolean;
  showPhotosButton?: boolean;
  showInstagramButton?: boolean;
  showFacebookButton?: boolean;
  showYoutubeButton?: boolean;
  showTiktokButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  showHomeButton = true, 
  showPhotosButton = true, 
  showInstagramButton = true,
  showFacebookButton = true,
  showTiktokButton = true,
  showYoutubeButton = true
}) => {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handlePhotosClick = useCallback(() => {
    navigate("/Photos");
  }, [navigate]);

  const handleInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/lakesidediamond", "_blank");
  }, []);

  const handleFacebookClick = useCallback(() => {
    window.open("https://www.facebook.com/LakeSideDiamond/", "_blank");
  }, []);

  const handleTiktokClick = useCallback(() => {
    window.open("https://www.tiktok.com/@lakesidediamond", "_blank");
  }, []);

  const handleYoutubeClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UC4L6tD8LBOed9KWWE_8kjNQ", "_blank");
  }, []);

  return (
    <header className="navbar-container">
      <div className="left-row text-white">
        {showHomeButton && (
          <Button
            ref={buttonRef}
            onClick={handleHomeClick}
            className="links"
            variant="outline"
          >
            Home
          </Button>
        )}
        {showPhotosButton && (
          <Button
            ref={buttonRef}
            onClick={handlePhotosClick}
            className="links"
            variant="outline"
          >
            Photos
          </Button>
        )}
      </div>
      <div className="center-row">
        {showInstagramButton && (
          <Button
            ref={buttonRef}
            onClick={handleInstagramClick}
            className="links"
            variant="outline"
          >
            Instagram
          </Button>
        )}
        {showFacebookButton && (
          <Button
            ref={buttonRef}
            onClick={handleFacebookClick}
            className="links"
            variant="outline"
          >
            Facebook
          </Button>
        )}
        {showTiktokButton && (
          <Button
            ref={buttonRef}
            onClick={handleTiktokClick}
            className="links"
            variant="outline"
          >
            TikTok
          </Button>
        )}
        {showYoutubeButton && (
          <Button
            ref={buttonRef}
            onClick={handleYoutubeClick}
            className="links"
            variant="outline"
          >
            Youtube
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
