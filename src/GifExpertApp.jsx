import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Dragon Ball",
  ]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, "Naruto"]);
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories(categories.concat(newCategory));
  };

  return (
    <div className="bg-cyan-800 h-screen flex flex-col p-10 gap-4">
      {/* Title */}
      <h1 className="text-4xl text-white">GifExpertApp</h1>

      {/* Add GIF Category Component */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* GIF Grid Results display */}
      <ol className="list-decimal list-inside text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
