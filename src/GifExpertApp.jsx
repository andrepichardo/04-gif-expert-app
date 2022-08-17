import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hunter X Hunter"]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, "Naruto"]);
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories(categories.concat(newCategory));
  };

  return (
    <div className="bg-cyan-800 h-full min-h-screen flex flex-col p-10 gap-4">
      {/* Title */}
      <h1 className="text-4xl text-white">GifExpertApp</h1>

      {/* Add GIF Category Component */}
      <div className="flex gap-2">
        <AddCategory onNewCategory={onAddCategory} />
        <button
          onClick={() => setCategories([])}
          className="bg-blue-900 rounded-full text-white px-3"
        >
          Limpiar
        </button>
      </div>

      {/* GIF Grid Results display */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
