import type { StarRatingProps } from "../../utils/types";
import React from "react";

export const StarRatingUi: React.FC<StarRatingProps> = ({ rating, size = 24 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    objectFit: "contain" as const,
  };

  return (
    <div className="flex items-center gap-0">
      {Array.from({ length: fullStars }).map((_, i) => (
        <img key={`full-${i}`} src="/assets/star-full.png" alt="Full star" style={starStyle} />
      ))}
      {hasHalfStar && (
        <img key="half" src="/assets/star-half.png" alt="Half star" style={starStyle} />
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <img key={`empty-${i}`} src="/assets/star-empty.png" alt="Empty star" style={starStyle} />
      ))}
    </div>
  );
};
