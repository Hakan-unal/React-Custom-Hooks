import React, { useEffect, useRef } from 'react';

import { useLocalStorage } from "./useLocalStorage"
import './App.css';



const App = () => {

  const [name, setName] = useLocalStorage("name", "")
  const renderCount = useRef(0)


  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      ></input>



      <p>{renderCount.current}</p>
    </div>
  );
}

export default App;
