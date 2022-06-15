import React, { useEffect, useRef, useState } from 'react';

import { useLocalStorage } from "./useLocalStorage"
import './App.css';



const App = () => {

  const [name, setName] = useLocalStorage("name", "")
  const [surname, setSurname] = useState("")
  const renderCount = useRef(0)
  const inputRef = useRef("")
  const prevInputRef = useRef("")



  const handleSubmit = () => {
    inputRef.current.focus()
    inputRef.current.value = "button click"
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  useEffect(() => {
    prevInputRef.current = surname
  }, [surname])



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
        <p>Now: {surname}</p>
        <p>Previous:{prevInputRef.current}</p>

      </div>
    </>
  );
}

export default App;
