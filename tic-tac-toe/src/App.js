import './App.css';
import {useEffect, useState} from "react";
import calculateWinner from "./helpers/calculateWinner";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [value, setValue] = useState('X');
    const [clicked, setClicked] = useState(true);
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);

    const handleButtonClick = (index) => {
        if (board[index] || winner) return;
        const tmpBoard = [...board];
        clicked ? setValue('O') : setValue('X');
        tmpBoard[index] = value;
        setBoard(tmpBoard);
        setClicked(!clicked);
    }

    const handleResetClick = () => {
        const emptyBoard = board.map(value => value = null)
        setBoard(emptyBoard);
        setIsDraw(false);
    }
    useEffect(() => {
        setWinner(calculateWinner(board));
        const isBoardFull = board.every(value => value/*!== null*/);
        if (isBoardFull) setIsDraw(true);
    }, [board])


    return (
        <div className="container">
            <div className="game">
                {winner ? <h3>The winner is {winner}</h3> : isDraw ? <h3>Draw</h3> : null}
                <div className="board">
                    {
                        board.map((value, index) => {
                            return <button key={index} className="squareBtn" onClick={() => {
                                handleButtonClick(index)}
                            }>{value}
                            </button>
                        })
                    }
                </div>
                <p>The next player is {value}</p>
                <button onClick={() => handleResetClick()}>{winner || isDraw ? "Play again" : "Reset game"}</button>
            </div>

        </div>
    );
}

export default App;
