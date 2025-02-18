import { useContext, useEffect, useState } from "react";
import { GameContext } from "../contexts/game.context";

const GameProgressBar = ({ setDisplaySelection }) => {
  const { lottoSelStore, maxSelection } = useContext(GameContext);
  const [progPercent, setProgPercent] = useState(0);

  useEffect(() => {
    //Update the percent progress to show the progress in the bar
    if (lottoSelStore.length > 0) {
      const percent = (lottoSelStore.length / maxSelection) * 100;
      setProgPercent(percent);
    } else {
      setProgPercent(0);
    }
  }, [lottoSelStore]);

  function handleClick() {
    if (lottoSelStore.length === maxSelection) {
      //When max selection made then show the result
      setDisplaySelection(true);
    }
  }

  return (
    <div
      id="progress"
      onClick={handleClick}
      className={lottoSelStore.length === maxSelection ? "avail" : "not-avail"}
    >
      {/*Increase the progress bar width to indicate progress*/}
      <div id="progressBar" style={{ width: `${progPercent * 2.3}px` }}></div>
      <span id="progressBar-text">
        {lottoSelStore.length === maxSelection
          ? "Weiter →"
          : "Weiter zu Ihren Zahlen →"}
      </span>
    </div>
  );
};

export default GameProgressBar;
