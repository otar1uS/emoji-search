import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import EmojiList from "./components/EmojiList";
import "./App.css";

function EmojiSearch() {
  const [emojis, setEmojis] = useState([]);

  const YOUR_API_KEY = "";

  async function handleSearch(query) {
    const response = await axios.get(
      `https://emoji-api.com/emojis?search=${query}&access_key=${YOUR_API_KEY}`
    );

    setEmojis(response.data);
  }

  return (
    <div className="emoji-search">
      <h1>Emoji Search</h1>
      <SearchBar onSearch={handleSearch} />
      <EmojiList emojis={emojis} />
    </div>
  );
}

export default EmojiSearch;
