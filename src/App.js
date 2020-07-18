import React, { useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  function updateSearchValue(event) {
    setSearchValue(event.target.value)
  }

  function sendSearchQuery() {
    const apiKey = "AIzaSyBTAujqW8lRdVFUo_SJiaTZ79zh3lTa7FA";
    const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + searchValue + "&key=" + apiKey;
    fetch(apiUrl).then(res => res.json()).then((json) => {
      setSearchResults(json.items);
      console.log(json.items)
    })
  }
  return (
    <div>
      <input
        value={searchValue}
        placeholder="search books"
        onChange={updateSearchValue}
      /> 
      <button onClick={sendSearchQuery}>Find</button>
      <div>
        {searchResults
        .map(item => (
          <div>
            <img src={item.volumeInfo.imageLinks.thumbnail}/>
            <div>
              {item.volumeInfo.title} by {item.volumeInfo.authors[0]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

