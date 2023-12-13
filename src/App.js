
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />

    </div>
  );
}


function Counter() {

  const [step, setStep] = useState(1);

  const [Counter, setCounter] = useState(0);
  return (<>

    <div>
      <button onClick={() => setStep((s) => s - 1)}
      >-</button>
      <span>STEP {step}</span>
      <button onClick={() => setStep((s) => s + 1)}> + </button>

    </div>
    <br></br>
    <div>
      <button onClick={() => setCounter((c) => c - step)} >-</button>
      <span>COUNT   {Counter} </span>
      <button onClick={() => setCounter((c) => c + step)}>+</button>

    </div>

  </>

  )
}

export default App;
