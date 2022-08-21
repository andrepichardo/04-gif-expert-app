import { useState } from "react";
import { RiBrush3Line } from "react-icons/ri";
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
    <div className="bg-gradient-to-t from-slate-500 bg-cyan-900  h-full min-h-screen flex flex-col p-10 gap-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl self-center italic font-mono font-semibold text-emerald-400">
        GifExpertApp
      </h1>

      {/* Add GIF Category Component */}
      <div className="flex justify-center items-center mt-6 gap-3">
        <AddCategory onNewCategory={onAddCategory} />
        <button
          onClick={() => setIsMounted(true) & setCategories([""])}
          className=" border-2 border-blue-200 rounded-full flex w-[50px] h-[50px] justify-center items-center text-white px-3 active:scale-90 transition-all"
        >
          <RiBrush3Line className="text-blue-200 w-full h-full" />
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
