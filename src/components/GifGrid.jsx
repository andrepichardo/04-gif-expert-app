import { FaSpinner } from "react-icons/fa";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="flex flex-col gap-3 text-white">
      <h1 className="text-3xl mx-auto">{category}</h1>

      {isLoading && (
        <div className=" self-center h-80 flex items-center">
          <FaSpinner className="animate-spin w-20 h-20" />
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:gap-0 gap-3 mb-10">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
