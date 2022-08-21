import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
    // setCategories(categories.concat(inputValue));
  };

  return (
    <form
      className="flex justify-center items-center relative w-full md:w-9/12 lg:w-6/12"
      onSubmit={onSubmit}
    >
      <input
        className="px-3 py-[14px] w-full rounded-full outline-none"
        type="text"
        placeholder="Search GIFs..."
        value={inputValue}
        onChange={onInputChange}
      />
      <button
        onClick={onSubmit}
        className="bg-cyan-700 flex items-center justify-center rounded-full w-14 h-14 absolute -right-0.5 group active:ring-2 active:scale-90 active:bg-white transition-all"
      >
        <RiSearchLine className="text-white group-active:text-cyan-700 w-7 h-7" />
      </button>
    </form>
  );
};
