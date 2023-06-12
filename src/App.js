import Sq from "./Sq";
import Enter from "./Enter";
import { useState } from "react";
import "./index.css";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Sq colorValue={colorValue} isDarkText={isDarkText} />
      <Enter
        colorValue={colorValue}
        setColorValue={setColorValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
