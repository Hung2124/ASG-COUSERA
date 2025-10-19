
export interface ImageData {
  id: number;
  src: string;
  alt: string;
}

export const galleryImages: ImageData[] = [
  { id: 1, src: 'https://picsum.photos/id/10/800/600', alt: 'Misty forest path.' },
  { id: 2, src: 'https://picsum.photos/id/20/800/600', alt: 'A person standing on a foggy road.' },
  { id: 3, src: 'https://picsum.photos/id/30/800/600', alt: 'Close-up of a cup of coffee.' },
  { id: 4, src: 'https://picsum.photos/id/40/800/600', alt: 'A vintage camera on a wooden surface.' },
  { id: 5, src: 'https://picsum.photos/id/50/800/600', alt: 'A person working on a laptop.' },
  { id: 6, src: 'https://picsum.photos/id/60/800/600', alt: 'Sun-drenched field of wheat.' },
];
