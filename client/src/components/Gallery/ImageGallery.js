import React from 'react';
import './ImageGallery.css';

// Using royalty-free photos from Unsplash (attribution-friendly for development)
const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=60', alt: 'Kontor interiör 1' },
  { src: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=60', alt: 'Kontor interiör 2' },
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=60', alt: 'Team möte' },
  { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=60', alt: 'Affärsmöte' },
];

export default function ImageGallery(){
  return (
    <section className="image-gallery" aria-labelledby="gallery-heading">
      <div className="gallery-inner">
        <h3 id="gallery-heading">Bilder från vårt arbete</h3>
        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            <figure key={i} className="gallery-item">
              <img src={img.src} alt={img.alt} className="gallery-img" />
              <figcaption className="gallery-caption">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
