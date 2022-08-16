import { useState } from "react";

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories(categories.concat(inputValue));
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="self-start px-2 py-1 rounded outline-none border border-cyan-400"
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
