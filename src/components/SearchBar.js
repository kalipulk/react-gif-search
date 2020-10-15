import React, { useEffect, useState } from 'react';

function SearchBar({ initialQuery, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const onSearchTermChange = (e) => setSearchTerm(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        e.currentTarget.reset();
    };

    useEffect(() => {
        setSearchTerm(initialQuery)
    }, [])
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="search"></label>
            <input type="text"
            onChange={onSearchTermChange}
            name="search"
            placeholder="Search for a Gif"
            value={searchTerm}
            />
            <button type="submit" className="search-button" >
            <i class="fa fa-search fa-lg"></i>
            </button>
        </form>

    );
}

export default SearchBar
