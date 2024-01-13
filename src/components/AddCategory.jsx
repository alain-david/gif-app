import { useState } from "react";
import Proptypes from "prop-types";

export const AddCategory = ({ onNewCat }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newInpuValue = inputValue.trim();
    if (newInpuValue.length <= 1) return;

    onNewCat(newInpuValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
