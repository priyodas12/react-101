import React from "react";
import './App.css';
import Counter from "./components/counter/counter";
import SearchForm from "./components/searchForm/SearchForm";

function App() {
  return React.createElement(
    "div",
    { className: "App" ,key:"App-Container"},[
    React.createElement(Counter, null),<SearchForm initialQuery="" onSearch={(searchText)=>console.log("searchText: ",searchText)} />]
  );
}

export default App;
