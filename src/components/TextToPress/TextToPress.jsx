import { useState } from "react";
import { encrypt } from "../../utils/ttp";
import "./TextToPress.css";

function TextToPress({ rawText, setRawText }) {
  const [inputValue, setInputValue] = useState("");
  const [testvar, setTestvar] = useState("Nothing");
  // let testvar = "";

  function handleSubmit(submittedText) {
    console.log("handleSubmit running");
    // setRawText(submittedText);
    // encrypt(inputValue);
    let result = encrypt(inputValue);
    setTestvar(result);
  }

  return (
    <div className="ttp">
      <h2 className="ttp_heading">Text To Press converter</h2>
      <p className="ttp_para">
        Input any letter from the English alphabet, number or keyboard symbol to
        convert!<br></br>Periods in the result are there to result ambiguity
        between letters that appear under the same key.
      </p>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(inputValue);
        }}
      >
        {/* <legend>Text to Press Converter</legend> */}

        <label className="label" htmlFor="text">
          Text to encrypt <br></br>
          {/* <code>
            [(Insert what will happen to the input, here (the normalise fn))]
            </code> */}
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
        {/* <div>
          <label className="label" htmlFor="result">
            Result
          </label>
          <input className="ttp_result" id="result" value={testvar} />
        </div> */}
      </form>
      <p>
        Result: <span>{testvar}</span>
      </p>
    </div>
  );
}

export default TextToPress;
