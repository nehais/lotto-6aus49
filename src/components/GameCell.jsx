import { useState } from "react";
import SelectedIcon from "../assets/selected.png";

const GameCell = ({ value }) => {
  const [cellSelected, setCellSelected] = useState(false);

  return (
    <div className="game-cell" onClick={() => setCellSelected((prev) => !prev)}>
      {cellSelected && (
        <img src={SelectedIcon} alt="Cell selected Icon" className="sel-icon" />
      )}
      {!cellSelected && <span className="cell-value">{value}</span>}
    </div>
  );
};

export default GameCell;
