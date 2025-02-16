import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/game.context";

const GameProgressBar = ({ setDisplaySelection }) => {
  const { selectionCount, maxSelection } = useContext(GameContext);
  const [progPercent, setProgPercent] = useState(0);

  useEffect(() => {
    //Update the percent progress to show the progress in the bar
    if (selectionCount > 0) {
      const percent = (selectionCount / maxSelection) * 100;
      setProgPercent(percent);
    } else {
      setProgPercent(0);
    }
  }, [selectionCount]);

  function handleClick() {
    if (selectionCount === maxSelection) {
      //When max selection made then show the result
      setDisplaySelection(true);
    }
  }

  return (
    <div
      id="progress"
      onClick={handleClick}
      className={selectionCount === maxSelection ? "avail" : "not-avail"}
    >
      <div id="progressBar" style={{ width: `${progPercent * 2.3}px` }}></div>
      <span id="progressBar-text">
        {selectionCount === maxSelection
          ? "Weiter →"
          : "Weiter zu Ihren Zahlen →"}
      </span>
    </div>
  );
};

export default GameProgressBar;
