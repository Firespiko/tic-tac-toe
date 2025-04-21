import { useState, useEffect } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="border-2 border-gray-400 w-16 h-16 flex items-center justify-center text-2xl font-bold" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setIsVisible(true);
      setStatus("Winner: " + winner);
    } else if (noWinner(squares)) {
      setIsVisible(false);
      setStatus("No Winner 🙇🏿");
    } else {
      setStatus("Next Player: " + (xIsNext ? "X" : "O"));
    }
  }, [squares, xIsNext]); // Effect runs whenever squares or xIsNext changes

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="status text-xl font-semibold mb-4">
        <img src="/download.jpeg" alt="Hero of my story" className={isVisible ? "visible" : "invisible"} />
        {status}
      </div>

      <div className="grid grid-cols-3">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < conditions.length; i++) {
    const [a, b, c] = conditions[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function noWinner(squares) {
  return squares.every(square => square !== null);
}
