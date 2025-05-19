import React from "react";

interface AvatarNeonGlowProps {
  src: string;
  alt?: string;
  size?: number; // tamaño máximo en px
  className?: string;
}

export const AvatarNeonGlow: React.FC<AvatarNeonGlowProps> = ({
  src,
  alt = "avatar",
  size = 400,
  className = "",
}) => (
  <div
    className={`neon-glow-avatar-wrapper ${className}`}
    style={{ width: "100%", maxWidth: size, aspectRatio: "1/1" }}
  >
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      className="img-fluid home-image"
    />
    <span className="neon-glow-ring" />
  </div>
);
