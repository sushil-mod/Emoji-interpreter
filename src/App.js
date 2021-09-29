import { useState } from "react";
import "./styles.css";

const emojiData = {
  "😀": "similing",
  "😔": "sad",
  "😠": "angry",
  "😊": "happy",
  "🤔": "thinking"
};

var emojis = Object.keys(emojiData);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiData[userInput];
    if (meaning === "") {
      meaning = "we dont have in our Database";
    }

    setMeaning(meaning);
  }

  function emojiClickhandler(emoji) {
    var meaning = emojiData[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>First App</h1>
      <input onChange={onChangeHandler}></input>
      <div>{meaning} </div>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickhandler(emoji)}
          key={emoji}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
