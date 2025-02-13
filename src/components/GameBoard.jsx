import { useEffect, useState } from "react";
import GameCell from "./GameCell";

const GameBoard = () => {
  const boardCellsCount = 49; //Board Nos Count
  const [boardCells, setBoardCells] = useState([]);
  const [selectionCount, setSelectionCount] = useState(0);

  useEffect(() => {
    let cellArr = [];
    for (let i = 1; i <= boardCellsCount; i++) {
      cellArr.push({ no: i, selected: false });
    }

    setBoardCells([...cellArr]);
  }, [boardCellsCount]);

  function deleteSelections() {
    setSelectionCount(0);
    setBoardCells((prev) => prev.map((cell) => ({ ...cell, selected: false })));
  }

  function onNext() {
    //Array is already sorted so just pick the selected Nos
    const selectedNos = boardCells
      .filter((cell) => cell.selected)
      .map((selectedCell) => selectedCell.no);
    console.log(selectedNos);
  }

  return (
    <div className="game-board">
      <button onClick={onNext} className="home-buttons">
        next
      </button>
      <div className="board-row">
        {boardCells &&
          boardCells.map((cell, index) => (
            <GameCell
              value={cell.no}
              key={index}
              selected={cell.selected}
              setBoardCells={setBoardCells}
              selectionCount={selectionCount}
              setSelectionCount={setSelectionCount}
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
