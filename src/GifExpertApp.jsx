import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {};

  return (
    <div className="bg-cyan-800 h-screen flex flex-col p-10 gap-4">
      {/* Titulo */}
      <h1 className="text-4xl text-white">GifExpertApp</h1>
      {/* Input */}

      {/* Listado de GIFs */}
      <button className="self-start">Agregar</button>
      <ol className="list-decimal list-inside text-white">
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* GIF Item */}
    </div>
  );
};
