import { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const [isMounted, setIsMounted] = useState(true);

  const onAddCategory = (newCategory) => {
    // setCategories([newCategory, ...categories]);
    // console.log(newCategory);
    while (categories.length > 0) {
      categories.pop();
    }
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
          <div className=" flex justify-center text-white" key={category}>
            {isMounted ? (
              <div className="flex flex-col gap-3 h-96 items-center justify-center">
                <p className="text-3xl font-bold">
                  There are no results to show right now...
                </p>
                <p className="text-3xl font">
                  Use the search engine above to search for GIF's!
                </p>
              </div>
            ) : (
              <GifGrid category={category} />
            )}
          </div>
        ))}
    </div>
  );
};
