import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Article from "./article";

function App() {
  return (
    <div className="App">
      <Article title={"React入門1"} contents={"propsについて"} />
      <Article title={"React入門2"} contents={"propsむずかし、"} />
    </div>
  );
}

export default App;
