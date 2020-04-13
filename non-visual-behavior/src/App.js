import React, { useState } from "react";
import "./App.css";

import DynamicTitle from "./DynamicTitle";

function App() {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <div className="App">
      {state ? (
        <h1>We are in a truthy state</h1>
      ) : (
        <h1>We are in a falsy state</h1>
      )}
      <button onClick={toggleState}>Click Me!</button>
      {/* <DynamicTitle /> */}
    </div>
  );
}

export default App;
