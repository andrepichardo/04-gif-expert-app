import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {
    // setCategories([...categories, "Naruto"]);
    setCategories(categories.concat("Naruto"));
  };

  return (
    <div className="bg-cyan-800 h-screen flex flex-col p-10 gap-4">
      {/* Titulo */}
      <h1 className="text-4xl text-white">GifExpertApp</h1>

      {/* Input */}
      <AddCategory />

      {/* Listado de GIFs */}
      <button
        onClick={onAddCategory}
        className="active:scale-95 transition-all self-start bg-white text-cyan-600 rounded p-1"
      >
        Agregar
      </button>
      <ol className="list-decimal list-inside text-white">
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* GIF Item */}
    </div>
  );
};
