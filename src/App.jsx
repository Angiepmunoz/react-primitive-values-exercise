import { useState } from "react";
import Win from "./components/Win";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  const handleScoreChange = () => {
    setScore(score + increment);
  };

  const handleIncrement = () => {
    if (score < 10) {
      alert("You do not have enough points");
    } else {
      setIncrement(increment + 1);
      setScore(score - 10);
    }
  };

  const handleReset = ()=> {
    setIncrement(1);
    setScore(0)
  }

  return (
    <div className="app">
      <h1>Current score: {score}</h1>
      {score < 100 ? (
        <>
          <button onClick={handleScoreChange}>+ {increment}</button>
          <br />
          <button onClick={handleIncrement}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </>
      ) : ( <Win handleReset={handleReset }/>
        // <>
        //   <h2>YOU WIN!</h2>
        //   <button onClick={handleReset}>Click to play again</button>
        // </>
      )}
    </div>
  );
}

export default App;
