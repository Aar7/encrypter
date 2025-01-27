import { useEffect, useState } from "react";
import TextToPress from "../TextToPress/TextToPress";
import Header from "../Header/Header";

import "./App.css";

function App() {
  const [rawText, setRawText] = useState("");

  useEffect(() => {
    console.log(`rawText: ${rawText}`);
  }, [rawText]);

  return (
    <>
      <Header />
      <TextToPress rawText={rawText} setRawText={setRawText} />
    </>
  );
}

export default App;
