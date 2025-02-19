import { useContext } from "react";
import { GameContext } from "../contexts/game.context";
import { LottoStorageUtils } from "../utils/LottoStorageUtils";

const GameCell = ({ value, selected }) => {
  const { setBoardCells, maxSelection, lottoSelStore, setLottoSelStore } =
    useContext(GameContext);

  function selectionChanged(e) {
    //6 Nos selected. No further selection allowed
    if (lottoSelStore.length === maxSelection && !selected) return;

    console.log("No. selection changed: ", value, !selected);

    if (!selected) {
      //Add the selected no to the localStorage & Lotto state
      LottoStorageUtils.setItem([...lottoSelStore, value]);
      setLottoSelStore([...lottoSelStore, value]);
    } else {
      //Remove the deselected no from the localStorage & Lotto state
      const preSelection = lottoSelStore.filter((no) => no !== value);

      //Update the localStorage with the selection to come back to
      LottoStorageUtils.setItem(preSelection);
      setLottoSelStore(preSelection);
    }

    //Update the Board Cell value for selection
    setBoardCells((prev) =>
      prev.map((cell) =>
        cell.no === value ? { ...cell, selected: !cell.selected } : cell
      )
    );
  }

  return (
    <div
      className={`game-cell  ${
        lottoSelStore.length === maxSelection && !selected
          ? "cell-disabled "
          : selected
          ? " sel-icon"
          : ""
      } `}
      onClick={() => selectionChanged(value, selected)}
    >
      {/*Show a cross if the no is selected else the No */}
      {!selected && <span className="cell-value">{value}</span>}
    </div>
  );
};

export default GameCell;
