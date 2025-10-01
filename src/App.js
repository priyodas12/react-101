import React from "react";
import './App.css';
import Counter from "./components/counter/counter";

function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(Counter, null)
  );
}

export default App;
