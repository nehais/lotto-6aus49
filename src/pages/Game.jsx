import "../styles/Game.css";
import { useContext, useState } from "react";
import GameBoard from "../components/GameBoard";
import SelectionResult from "../components/SelectionResult";
import GameProgressBar from "../components/GameProgressBar";
import { GameContext } from "../contexts/game.context";

const Game = () => {
  const [displaySelection, setDisplaySelection] = useState(false);
  const { setBoardCells, setSelectionCount, setLottoSelStore } =
    useContext(GameContext);

  function clearSelections() {
    //Clear all the selected Nos
    setSelectionCount(0); //Clear Context Storage Cnt
    setLottoSelStore([]); //Clear Context Storage
    localStorage.setItem("lottoSelection", []); //Clear Local Storage
    setBoardCells((prev) => prev.map((cell) => ({ ...cell, selected: false }))); //Reset Context Boardcells
  }

  return (
    <div className="game">
      <h1 className="game-title">LOTTO 6aus49 spielen</h1>
      {!displaySelection && (
        <>
          <h3 className="game-sub-title">Ihr Spielfeld</h3>

          {/*Main Game board holding the functionality*/}
          <GameBoard />

          <div className="game-ctrl">
            {/*Clear Selection Button*/}
            <button className="delete-button" onClick={clearSelections}>
              Löschen
            </button>
            {/*Progress bar to show nos selected*/}
            <GameProgressBar setDisplaySelection={setDisplaySelection} />
          </div>
        </>
      )}

      {/*Selection finalized. Display the nos*/}
      {displaySelection && <SelectionResult />}
    </div>
  );
};

export default Game;
