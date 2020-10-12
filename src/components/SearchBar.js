import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="search-input-wrapper">
            <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Gif"
            id="search"
            />
            <button onClick={props.handleFormSubmit} className="search-button">
            Search
            </button>
        </div>

    )
}

export default SearchBar
