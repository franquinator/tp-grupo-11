import React, { useState } from "react";

export default function ImageWithFallback({ src, alt, className, fallback }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    // Si falla la imagen original, usamos el fallback o una imagen por defecto
    setImgSrc(
      fallback || "https://placehold.co/600x400?text=Imagen+no+disponible"
    );
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}