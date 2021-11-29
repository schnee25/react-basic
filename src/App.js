import React from "react";
import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article title={"React入門1"} content={"propsについて"} />
    </div>
  );
}

export default App;
