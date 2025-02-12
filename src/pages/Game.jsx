import GameBoard from "../components/GameBoard";
import "../styles/Game.css";

const Game = () => {
  return (
    <div className="game">
      <h1 className="game-title">LOTTO 6aus49 spielen</h1>

      <h3 className="game-sub-title">Ihr Spielfeld</h3>

      {/*Main Game board holding the functionality*/}
      <GameBoard></GameBoard>
    </div>
  );
};

export default Game;
