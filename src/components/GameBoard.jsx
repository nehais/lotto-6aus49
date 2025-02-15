import { useContext, useEffect, useState } from "react";

import { GameContext } from "../contexts/game.context";
import GameCell from "../components/GameCell";

const GameBoard = () => {
  const [show, setShow] = useState(false);
  const { boardCells, setBoardCells, setSelectionCount, setLottoSelStore } =
    useContext(GameContext);

  useEffect(() => {
    setShow(true);
  }, []);

  function clearSelections() {
    //Clear all the selected Nos
    setSelectionCount(0);
    localStorage.setItem("lottoSelection", []); //Clear Local Storage
    setLottoSelStore([]);
    setBoardCells((prev) => prev.map((cell) => ({ ...cell, selected: false })));
  }

  return (
    <div className={`game-board ${show ? "show" : ""}`}>
      {/*Game Board Rows*/}
      <div className="board-row">
        {boardCells &&
          boardCells.map((cell) => (
            <GameCell key={cell.no} value={cell.no} selected={cell.selected} />
          ))}
      </div>

      {/*Clear Selection Button*/}
      <button className="delete-button" onClick={clearSelections}>
        Löschen
      </button>
    </div>
  );
};

export default GameBoard;
