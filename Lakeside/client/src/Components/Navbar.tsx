import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Components/ui/button";

interface NavbarProps {
  showHomeButton?: boolean;
  showPhotosButton?: boolean;
  showInstagramButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showHomeButton = true, showPhotosButton = true, showInstagramButton = true }) => {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handlePhotosClick = useCallback(() => {
    navigate("/Photos");
  }, [navigate]);

  return (
    <header>
      {showHomeButton && <Button ref={buttonRef} onClick={handleHomeClick} className="links" variant="outline">Home</Button>}
      {showPhotosButton && <Button ref={buttonRef} onClick={handlePhotosClick} className="links" variant="outline">Photos</Button>}
      {showInstagramButton && <Button ref={buttonRef} className="links" variant="outline">Instagram</Button>}
    </header>
  );
};

export default Navbar;
