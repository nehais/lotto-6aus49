import { useEffect, useState } from "react";
import GameCell from "./GameCell";

import DeleteIcon from "../assets/delete-icon.png";

const GameBoard = () => {
  const boardCellsCount = 49;
  const [boardCells, setboardCells] = useState([]);

  useEffect(() => {
    setboardCells([...Array(boardCellsCount).keys()]);
  }, [boardCellsCount]);

  return (
    <div className="game-board">
      <div className="board-row">
        {boardCells &&
          boardCells.map((cellVal) => (
            <GameCell value={cellVal} key={cellVal} />
          ))}
      </div>
      <button className="delete-button">
        <img src={DeleteIcon} alt="Delete Icon" className="delete-icon" />
        Löschen
      </button>
    </div>
  );
};

export default GameBoard;
