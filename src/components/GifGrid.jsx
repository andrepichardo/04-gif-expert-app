import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    // getGifs(category).then((newImages) => setImages(newImages));
    getImages();
  }, []);

  return (
    <div className="flex flex-col gap-3 text-white">
      <h1 className="text-3xl mx-auto">{category}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:gap-0 gap-3 mb-10">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
