import Image from "next/image";
import React from "react";

function PropertyImages({ images }) {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images?.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            width={1800}
            height={400}
            className="object-cover h-[400px] mx-auto rounded-xl"
            priority={true}
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`${
                  images.length === 3 && idx === 2 ? "col-span-2" : "col-span-1"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  width={1800}
                  height={400}
                  className="object-cover h-[400px] w-full rounded-xl"
                  priority={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PropertyImages;
