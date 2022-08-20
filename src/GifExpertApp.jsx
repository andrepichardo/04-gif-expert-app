import { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const [isMounted, setIsMounted] = useState(true);

  const onAddCategory = (newCategory) => {
    // setCategories([newCategory, ...categories]);
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories(categories.concat(newCategory));
    setIsMounted(false);
  };

  return (
    <div className="bg-cyan-800 h-full min-h-screen flex flex-col p-10 gap-4">
      {/* Title */}
      <h1 className="text-4xl text-white">GifExpertApp</h1>

      {/* Add GIF Category Component */}
      <div className="flex gap-2">
        <AddCategory onNewCategory={onAddCategory} />
        <button
          onClick={() => setIsMounted(true) & setCategories([""])}
          className="bg-blue-900 rounded-full text-white px-3"
        >
          Limpiar
        </button>
      </div>

      {/* GIF Grid Results display */}
      {categories
        .slice(0)
        .reverse()
        .map((category) => (
          <div className=" flex justify-center" key={category}>
            {isMounted ? (
              <div className=" self-center h-80 flex items-center">
                There are no results.
              </div>
            ) : (
              <GifGrid category={category} />
            )}
          </div>
        ))}
    </div>
  );
};
