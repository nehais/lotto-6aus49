import { useContext, useEffect, useState } from "react";

import { GameContext } from "../contexts/game.context";
import GameCell from "../components/GameCell";

const GameBoard = () => {
  const [show, setShow] = useState(false);
  const { boardCells } = useContext(GameContext);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`game-board ${show ? "show-board" : ""}`}>
      {/*Game Board Rows*/}
      <div className="board-row">
        {boardCells &&
          boardCells.map((cell) => (
            <GameCell key={cell.no} value={cell.no} selected={cell.selected} />
          ))}
      </div>
    </div>
  );
};

export default GameBoard;
