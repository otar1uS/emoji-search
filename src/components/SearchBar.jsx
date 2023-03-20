import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../App.css";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search emojis..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">
        <AiOutlineSearch />
      </button>
    </form>
  );
}

export default SearchBar;
