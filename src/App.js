import React, { useState, useEffect } from 'react';

import { useLocalStorage } from "./useLocalStorage"
import './App.css';



const App = () => {

  const [name, setName] = useLocalStorage("name", "")
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      ></input>
    </div>
  );
}

export default App;
