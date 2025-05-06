import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const SearchBar = () => {
  const { setSearchTerm } = useContext(ContactContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="جستجو بر اساس نام، نام خانوادگی یا ایمیل"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;