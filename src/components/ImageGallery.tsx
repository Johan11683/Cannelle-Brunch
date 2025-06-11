import { useState, useEffect, useRef } from 'react';
import '../styles/_imageGallery.scss';

type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setZoomedIndex(null);
      }
    };

    if (zoomedIndex !== null) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [zoomedIndex]);

  const handleImageClick = (index: number) => {
    setZoomedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="gallery" ref={containerRef}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className={`gallery__image ${zoomedIndex === index ? 'zoomed' : ''}`}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );
}
