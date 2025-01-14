import { useEffect, useState } from "react";
import TextToPress from "../TextToPress/TextToPress";

import "./App.css";

function App() {
  const [rawText, setRawText] = useState("");

  useEffect(() => {
    console.log(`rawText: ${rawText}`);
  }, [rawText]);

  return (
    <>
      <TextToPress rawText={rawText} setRawText={setRawText} />
    </>
  );
}

export default App;
