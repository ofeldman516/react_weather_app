import React, { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor='query'>City</label>
        <input className='input'
          type='text'
          name='query'
          id='query'
          placeholder='i.e. Berlin'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='button' type='submit'>Search</button>
      </form>
    </div>
  );
};

export default WeatherSearch;
