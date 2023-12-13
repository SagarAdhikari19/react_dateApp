
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

  const [count, setCounter] = useState(0);
  const date = new Date("dec 13 2023");
  date.setDate(date.getDate() + count);
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
      <span>COUNT   {count} </span>
      <button onClick={() => setCounter((c) => c + step)}>+</button>

    </div>

    <p>
      <span>

        {count === 0
          ? "Today is "
          : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `
        }



      </span>
      <span>{date.toDateString()}</span>
    </p>

  </>

  )
}

export default App;
