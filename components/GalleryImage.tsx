
import React from 'react';
import type { ImageData } from '/constants.ts';

interface GalleryImageProps {
  image: ImageData;
  onMouseOver: (src: string, alt: string) => void;
  onMouseOut: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, onMouseOver, onMouseOut }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg shadow-lg border-2 border-transparent hover:border-blue-400 hover:shadow-blue-500/30 transition-all duration-300"
      onMouseOver={() => onMouseOver(image.src, image.alt)}
      onMouseOut={onMouseOut}
      tabIndex={0}
      role="button"
      aria-label={image.alt}
    >
      <img
        src={image.src.replace('/800/600', '/200/150')}
        alt={image.alt}
        className="w-full h-full object-cover cursor-pointer transform transition-transform duration-300 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export default GalleryImage;