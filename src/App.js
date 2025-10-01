import React from "react";
import './App.css';
import Counter from "./components/counter/counter";
import SearchForm from "./components/searchForm/SearchForm";
import GenreSelect from "./components/GenreSelect/GenreSelect";

function App() {
  return React.createElement(
    "div",
    { className: "App" ,key:"App-Container"},[
    React.createElement(Counter, null),
    <SearchForm initialQuery="" onSearch={(searchText)=>console.log("searchText: ",searchText)} />,
    <GenreSelect 
    genreList={["Comedy","Action","Drama","Horror","Art","Documentary"]} 
    selectedGenre={"Drama"}
    onSelect={(genre)=>console.log("Parent: ",genre)}
    />]
  );
}

export default App;
