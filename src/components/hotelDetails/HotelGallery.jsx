
import React from "react";

function HotelGallery({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[380px] md:h-[420px]">

      {/* Main Image */}
      <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
        <img
          src={images[0]}
          alt="Hotel main view"
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Remaining Images */}
      {images.slice(1, 5).map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={image}
            alt={`Hotel view ${index + 2}`}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      ))}

    </div>
  );
}

export default HotelGallery;
