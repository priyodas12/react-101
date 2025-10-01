import React, { useState } from 'react'
import "./SearchForm.css";

export default function SearchForm({ initialQuery = "", onSearch }) {
    const [searchValue, setSearchValue] = useState(initialQuery);

    function handleSearch(e) {
        e.preventDefault();
        console.log("handleSearch", searchValue);
        if (onSearch) {
            onSearch(searchValue)
        }
        setSearchValue("")
    }

    return (
        <div id="search-form" key="search-form">
            <form id="search-form" key="search-form" onSubmit={handleSearch}>
                <input
                    key="search-input"
                    id="input-search"
                    type='text' value={searchValue}
                    placeholder="Type something..."
                    onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <button key="search-btn" type="button" id="search-btn">Search</button>
            </form>
        </div>
    )
}
