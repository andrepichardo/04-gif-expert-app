import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { RiBrush3Line } from "react-icons/ri";
import logoGiphy from "./assets/logos/giphy-logo.png";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const [isMounted, setIsMounted] = useState(true);

  const onAddCategory = (newCategory) => {
    while (categories.length > 0) {
      categories.pop();
    }
    if (categories.includes(newCategory)) return;
    // setCategories([newCategory, ...categories]);
    setCategories(categories.concat(newCategory));
    setIsMounted(false);
  };

  return (
    <div className="bg-gradient-to-t from-purple-900 bg-blue-900  h-full min-h-screen flex flex-col p-10 gap-4">
      {/* Title & Attribution */}
      <div className="absolute text-white w-40 md:w-44 right-3 -mt-6">
        <img src={logoGiphy} alt="Powered by GIPHY." />
      </div>
      <h1 className="text-4xl md:text-5xl self-center italic font-mono font-semibold mt-10 text-emerald-400">
        GifExpertApp
      </h1>

      {/* Search GIF's Component */}
      <div className="flex justify-center items-center mt-6 gap-3">
        <AddCategory onNewCategory={onAddCategory} />
        <button
          onClick={() => setIsMounted(true) & setCategories([""])}
          className=" border-2 border-white rounded-full flex w-[50px] h-[50px] justify-center items-center text-white px-3 active:scale-90 transition-all"
        >
          <RiBrush3Line className="text-white w-full h-full" />
        </button>
      </div>

      {/* GIF Grid Results Display */}
      {categories
        .slice(0)
        .reverse()
        .map((category) => (
          <div className=" flex justify-center text-white" key={category}>
            {isMounted ? (
              <div className="flex flex-col text-center gap-5 h-96 items-center justify-center">
                <p className="text-3xl font-bold">
                  There are no results to show right now...
                </p>
                <p className="text-3xl font">
                  Use the search engine above to search for GIFs!
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
