
import React, { useState, useCallback } from 'react';
import Preview from '/components/Preview.tsx';
import GalleryImage from '/components/GalleryImage.tsx';
import { galleryImages } from '/constants.ts';
import type { ImageData } from '/constants.ts';

const INITIAL_TEXT = 'Hover over an image below to display here.';

const App: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewText, setPreviewText] = useState<string>(INITIAL_TEXT);

  const handleUpdate = useCallback((src: string, alt: string) => {
    setPreviewImage(src);
    setPreviewText(alt);
  }, []);

  const handleUndo = useCallback(() => {
    setPreviewImage(null);
    setPreviewText(INITIAL_TEXT);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-8 font-sans">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-500">
            Interactive Photo Gallery
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            A modern implementation of classic DOM interaction using React.
          </p>
        </header>

        <main>
          <section className="mb-10" aria-live="polite">
            <Preview imageUrl={previewImage} text={previewText} />
          </section>

          <section>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {galleryImages.map((image: ImageData) => (
                <GalleryImage
                  key={image.id}
                  image={image}
                  onMouseOver={handleUpdate}
                  onMouseOut={handleUndo}
                />
              ))}
            </div>
          </section>
        </main>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;