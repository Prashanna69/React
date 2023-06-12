import Sq from "./Sq";
import Enter from "./Enter";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  return (
    <div>
      <Sq colorValue={colorValue} />
      <Enter colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
