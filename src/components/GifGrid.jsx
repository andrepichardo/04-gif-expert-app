import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

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
      <ol className="grid sm:grid-cols-2 md:grid-cols-4 xl:gap-0 gap-3 mb-10">
        {images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <li className="text-sm">{image.title}</li>
            <div className="p-0.5 bg-white w-fit flex">
              <img src={image.url} className="w-[300px] h-[300px]" />
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};
