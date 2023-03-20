import React from "react";
import "../App.css";
function EmojiList(props) {
  function handleCopyEmoji(emoji) {
    navigator.clipboard.writeText(emoji);
  }

  const emojis = props?.emojis?.filter((emoji) => !emoji.slug.startsWith("e"));

  return (
    <div className="emoji-list">
      {props.emojis === null ? (
        <h1 className="error-h1">
          No emoji with this name was founded try other one😞
        </h1>
      ) : (
        emojis?.map((emoji) => (
          <div
            key={emoji.unicodeName}
            className="emoji-item"
            onClick={() => handleCopyEmoji(emoji.character)}
          >
            <span>{emoji.character}</span>
            <span>{emoji.unicodeName}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default EmojiList;
