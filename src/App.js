import './App.css';
import {useState} from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [value, setValue] = useState(board[0]);

  const handleButtonClick = (index) => {


  }

  return (
    <div className="container">
      <div className="board">
          {
              board.map((value, index) => {
                  return <button key={index} className="squareBtn" onClick={() => handleButtonClick(index)}>{value}</button>
              })
          }
      </div>
    </div>
  );
}

export default App;
