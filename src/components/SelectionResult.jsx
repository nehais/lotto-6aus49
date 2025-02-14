import { useEffect, useContext, useState } from "react";

import { GameContext } from "../contexts/game.context";
const SelectionResult = () => {
  const { lottoSelStore } = useContext(GameContext);
  const [finalSelection, setFinalSelection] = useState([]);

  useEffect(() => {
    //Sort the selected Nos
    const selectedNos = lottoSelStore.sort((a, b) => a - b);

    setFinalSelection(selectedNos);
  }, [lottoSelStore]);

  return (
    <div>
      <h3 className="game-sub-title">Ihre Zahlen</h3>

      <div className="result-container">
        {finalSelection &&
          finalSelection.map((no) => (
            <div key={no} className="display-ball">
              <span>{no}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectionResult;
