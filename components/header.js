import React, { useState } from 'react';


const Header = ({ data, renderResults }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    }

    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchValue) || item.category.toLowerCase().includes(searchValue.toLowerCase() ));

    const handleSubmit = (e) => {
        e.preventDefault();
        renderResults(filteredData);
        setSearchValue('');
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" value={searchValue} onChange={handleSearchChange} placeholder="Search" />
                <button>Search</button>
            </form>  
        </header>
    )
}

export default Header;