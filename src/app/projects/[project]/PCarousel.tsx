import React from 'react';
import styles from './PCarousel.module.css';
import { useImagePreviewStyles } from '@/hooks/useImagePreviewStyles';

type PCarouselProps = {
  images: string[];
}

function PCarousel({ images = [] }: PCarouselProps) {
  const [width, positions] = useImagePreviewStyles(images.length);

  // TODO: add transitions by using layout id?
  return (
    // w must match img width 
    <ul className="relative flex rounded overflow-hidden w-[621px] h-[414px]">
      {images && positions.length === images.length && images.map((img, i) => (
        <li 
          key={img}
          className={styles.imgContainer}
          style={{ 
            backgroundImage: `url(${img})`,
            backgroundPosition: `${positions[i]}% 0`,
            backgroundSize: 'cover',
            width: `${width}%`,
          }}
        >
          <img 
            src={img}
            alt="dog"
            className={styles.img}
          />
        </li>
      ))}
    </ul>
  );
}

export default PCarousel
