import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="flex flex-col gap-3 text-white">
      <h1 className="text-3xl mx-auto">{category}</h1>

      {isLoading && <h2>Cargando...</h2>}

      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:gap-0 gap-3 mb-10">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
