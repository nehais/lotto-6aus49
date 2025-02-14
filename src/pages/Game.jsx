import "../styles/Game.css";
import { useContext, useState } from "react";

import { GameContext } from "../contexts/game.context";
import GameBoard from "../components/GameBoard";
import SelectionResult from "../components/SelectionResult";

const Game = () => {
  const { selectionCount, maxSelection } = useContext(GameContext);
  const [displaySelection, setDisplaySelection] = useState(false);

  return (
    <div className="game">
      <h1 className="game-title">LOTTO 6aus49 spielen</h1>
      {!displaySelection && (
        <>
          <div className="game-header-ctrl">
            <h3 className="game-sub-title">Ihr Spielfeld</h3>
            {/*Next button to the show the Nos selected*/}
            {selectionCount === maxSelection && (
              <button
                className="home-buttons"
                onClick={() => setDisplaySelection((prev) => !prev)}
              >
                Next
              </button>
            )}
          </div>

          {/*Main Game board holding the functionality*/}
          <GameBoard />
        </>
      )}

      {/*Selection finalized. Display the nos*/}
      {displaySelection && <SelectionResult />}
    </div>
  );
};

export default Game;
