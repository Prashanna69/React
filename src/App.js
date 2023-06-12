import Sq from "./Sq";
import Enter from "./Enter";
import { useState } from "react";
import "./index.css";

function App() {
  const [colorValue, setColorValue] = useState("");
  return (
    <div className="App">
      <Sq colorValue={colorValue} />
      <Enter colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
