import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean; // above-the-fold = eager + high fetch priority
  sizes?: string;
  objectFit?: 'cover' | 'contain';
  rounded?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  rounded = false,
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If image is already cached/buffered, mark as loaded immediately
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  if (error) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}
      >
        <i className="ri-image-line text-gray-300 text-2xl" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-3xl' : ''} ${className}`} style={{ width: width ? `${width}px` : undefined, height: height ? `${height}px` : undefined }}>
      {/* Blur placeholder while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        title={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-auto transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${
          objectFit === 'cover' ? 'object-cover object-top' : 'object-contain'
        } ${rounded ? 'rounded-3xl' : ''}`}
      />
    </div>
  );
}