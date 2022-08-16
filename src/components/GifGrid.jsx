import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">{category}</h1>
    </div>
  );
};
