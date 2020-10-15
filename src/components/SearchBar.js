import React, { useState } from 'react';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const onSearchChange = (e) => setSearchTerm(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(searchTerm);
        e.currentTarget.reset();
    };
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="search"></label>
            <input type="text"
            onChange={onSearchChange}
            name="search"
            placeholder="Search for a Gif"
            />
            <button type="submit" onClick={props.handleFormSubmit} className="search-button" >
            <i class="fa fa-search fa-lg"></i>
            </button>
        </form>

    );
}

export default SearchBar
