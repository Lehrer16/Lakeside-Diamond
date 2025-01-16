import React, { useEffect, useState } from 'react';

interface InstagramPhoto {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  caption: string;
  timestamp: string;
}

const InstagramPhotos: React.FC = () => {
  const [photos, setPhotos] = useState<InstagramPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      try {
        const response = await fetch('http://localhost:3001/instagram-photos');
        const data = await response.json();

        if (response.ok) {
          setPhotos(data);
        } else {
          setError(data.error || 'Failed to fetch photos');
        }
      } catch (error: any) {
        setError('Error fetching Instagram photos');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPhotos();
  }, []);

  if (loading) {
    return <p></p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="instagram-photos">
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            {photo.media_type === 'IMAGE' || photo.media_type === 'CAROUSEL_ALBUM' ? (
              <img src={photo.media_url} alt={photo.caption} />
            ) : photo.media_type === 'VIDEO' ? (
              <video controls>
                <source src={photo.media_url} type="video/mp4" />
              </video>
            ) : null}
            <p>{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPhotos;
