import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">{category}</h1>
      <p>{counter}</p>
      <button
        className="bg-stone-500 self-start p-3"
        onClick={() => setCounter(counter + 1)}
      >
        +1
      </button>
    </div>
  );
};
