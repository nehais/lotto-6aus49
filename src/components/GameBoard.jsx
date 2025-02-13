import { useEffect, useState } from "react";
import GameCell from "./GameCell";

const GameBoard = () => {
  const boardCellsCount = 49;
  const [boardCells, setBoardCells] = useState([]);
  const [selectionCompl, setSelectionCompl] = useState(false);

  useEffect(() => {
    const selArr = boardCells.filter((cell) => cell.selected);
    setSelectionCompl(selArr.length === 6 ? true : false);
  }, [boardCells]);

  useEffect(() => {
    let cellArr = [];
    for (let i = 1; i <= boardCellsCount; i++) {
      cellArr.push({ no: i, selected: false });
    }

    setBoardCells([...cellArr]);
  }, [boardCellsCount]);

  function deleteSelections() {
    setBoardCells((prev) => prev.map((cell) => ({ ...cell, selected: false })));
  }

  return (
    <div className="game-board">
      <div className="board-row">
        {Array.isArray(boardCells) &&
          boardCells.map((cell, index) => (
            <GameCell
              value={cell.no}
              key={index}
              selected={cell.selected}
              setBoardCells={setBoardCells}
              selectionCompl={selectionCompl}
            />
          ))}
      </div>
      <button className="delete-button" onClick={deleteSelections}>
        Löschen
      </button>
    </div>
  );
};

export default GameBoard;
