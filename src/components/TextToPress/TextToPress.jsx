import { useState } from "react";
import "./TextToPress.css";

function TextToPress({ rawText, setRawText }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(submittedText) {
    console.log("handleSubmit running");
    setRawText(submittedText);
  }

  return (
    <div className="me-too">
      <h1>Text To Press converter</h1>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(inputValue);
        }}
      >
        <legend>Text to Press Converter</legend>
        <label className="label" htmlFor="text">
          Text to encrypt
        </label>
        <input
          className="input"
          id="text"
          placeholder="e.g. 'hello world'"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="submit-button" type="submit">
          Encrypt!
        </button>
      </form>
    </div>
  );
}

export default TextToPress;
