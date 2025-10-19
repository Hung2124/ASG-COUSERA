
import React from 'react';

interface PreviewProps {
  imageUrl: string | null;
  text: string;
}

const Preview: React.FC<PreviewProps> = ({ imageUrl, text }) => {
  const bgClass = imageUrl ? `bg-[url('${imageUrl.replace(/'/g, "\\'")}')]` : 'bg-gray-800';

  return (
    <div
      id="image"
      className={`relative w-full h-80 sm:h-96 rounded-lg border-4 border-gray-600 shadow-2xl flex items-center justify-center bg-cover bg-center transition-all duration-500 ease-in-out ${bgClass}`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md"></div>
      <h2 className="relative z-10 p-4 text-center text-2xl sm:text-3xl font-bold text-white drop-shadow-lg transition-opacity duration-300">
        {text}
      </h2>
    </div>
  );
};

export default Preview;
