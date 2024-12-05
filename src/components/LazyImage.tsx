import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage = ({ src, alt, className = '' }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [inView, src]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {inView && (
        <>
          <div
            className={`absolute inset-0 bg-primary/10 blur-xl transition-opacity duration-300 ${
              isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
          />
        </>
      )}
    </div>
  );
};