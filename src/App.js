import React, { useEffect, useRef, useState } from 'react';

import { useLocalStorage } from "./useLocalStorage"
import './App.css';



const App = () => {

  const [name, setName] = useLocalStorage("name", "")
  const [surname, setSurname] = useState("")
  const renderCount = useRef(0)
  const inputRef = useRef(0)



  const handleSubmit = () => {
    inputRef.current.focus()
    inputRef.current.value = "click"
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })



  return (
    <>
      <div className="App">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </div>
      <div className="App">

        <input
          type="text"
          ref={inputRef}
          value={surname}
          onChange={e => setSurname(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Submit</button>


        <p>{renderCount.current}</p>
      </div>
    </>
  );
}

export default App;
