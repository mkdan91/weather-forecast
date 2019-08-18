import React from 'react';
import SearchBar from './search_bar';
import Weather from './weather';

const App = () =>{
  return (
    <div className='container'>
      <SearchBar />
      <Weather />
    </div>
  );
};
export default App;