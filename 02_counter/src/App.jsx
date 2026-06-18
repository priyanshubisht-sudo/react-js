import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  const addValue = () => {
    counter++;
    console.log("button clicked ", counter);
    console.log("clicked", counter);
    // counter= counter + 1;
    setCounter(counter)
  }

  const decreaseValue = () => {
    counter--;
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add Value {counter}
      </button>
      <button onClick={decreaseValue}>
        Remove Value {counter}
      </button>
    </>
  )
}

export default App
