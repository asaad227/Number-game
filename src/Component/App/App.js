import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(false);
  const [results, setResults] = useState(false);

  const total = [
    count * Math.ceil(Math.random() * 10) +
      count * Math.ceil(Math.random() * 3) +
      count * Math.ceil(Math.random() * 2) +
      count * Math.ceil(Math.random() * 4) +
      count * Math.ceil(Math.random() * 6) +
      count * Math.ceil(Math.random() * 5) +
      count * Math.ceil(Math.random() * 8) +
      count * Math.ceil(Math.random() * 7) +
      count * Math.ceil(Math.random() * 9),
  ];

  useEffect(() => {
    function handleClick() {
      setCount(count + 1);
    }

    function round() {
      if (count === 3) {
        return (
          <div className="page">
            <h1>Game Over</h1>
          </div>
        );
      } else {
        return (
          <div className="container">
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 10)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 3)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 2)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 4)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 6)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 5)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 8)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 7)}
            </button>
            <button className="btn" onClick={handleClick}>
              {count * Math.ceil(Math.random() * 9)}
            </button>
          </div>
        );
      }
    }
    setResults(round());
  }, [count]);

  function win_lose() {
    if (total > 110) {
      return (
        <div className="page">
          <h2>You are the winner</h2>
        </div>
      );
    } else if (total < 110 && count === 3) {
      return (
        <div className="page">
          {" "}
          <h2>Better luck next time!!!</h2>
        </div>
      );
    }
  }

  return (
    <div>
      <div>
        <div>
          <h4 className="page-total">Total: {total} </h4>
          <h4 className="page-total">{win_lose()}</h4>
          <h4 className="page-high">110 score to BEAT!!!;</h4>
          <h4 className="page">Round: {count}</h4>
        </div>
      </div>
      <div>{results}</div>
      {/* results will handle the whole game board */}
      <footer className="footer">
        {" "}
        "Lets test you math skills. This game has 10 sqaure boxes with sequence
        of number put into the math random to generate random number and you
        have to beat the score which is set by default 110.You have 3 round to
        beat highest score. Number sequence from top left to bottom right are as
        follow: 10, 3, 2, 4, 6, 5, 8, 7, 9.
      </footer>
    </div>
  );
}

export default App;
