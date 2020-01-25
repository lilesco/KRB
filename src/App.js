import React from 'react';

function App() {
  return (
    <div>
      <input
        placeholder="search book"
        onChange={(event) => {
          console.log(event.target.value)
        }}
      /> 
      <button>Find</button>
    </div>
  );
}

export default App;
