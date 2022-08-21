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
  };

  return (
    <form
      className="flex justify-center items-center relative w-10/12 md:w-9/12 lg:w-6/12"
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
        className="bg-emerald-500 flex items-center justify-center rounded-full w-14 h-14 absolute -right-0.5 group active:ring-2 ring-emerald-500 active:scale-90 active:bg-white transition-all"
      >
        <RiSearchLine className="text-white group-active:text-emerald-500 w-7 h-7" />
      </button>
    </form>
  );
};
