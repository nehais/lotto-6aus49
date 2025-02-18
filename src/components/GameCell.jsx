import { useContext } from "react";
import { GameContext } from "../contexts/game.context";

const GameCell = ({ value, selected }) => {
  const {
    selectionCount,
    setSelectionCount,
    setBoardCells,
    maxSelection,
    lottoSelStore,
    setLottoSelStore,
  } = useContext(GameContext);

  function selectionChanged(e) {
    //6 Nos selected. No further selection allowed
    if (selectionCount === maxSelection && !selected) return;

    //Update the selection count
    setSelectionCount((prev) => (selected ? --prev : ++prev));

    if (!selected) {
      //Update the localStorage with the selection to come back to
      localStorage.setItem(
        "lottoSelection",
        JSON.stringify([...lottoSelStore, value])
      );
      setLottoSelStore([...lottoSelStore, value]);
    } else {
      //Remove the no from the selected list
      const preSelection = lottoSelStore.filter((no) => no !== value);

      //Update the localStorage with the selection to come back to
      localStorage.setItem("lottoSelection", JSON.stringify(preSelection));
      setLottoSelStore(preSelection);
    }

    //Update the Cell value for selection
    setBoardCells((prev) =>
      prev.map((cell) =>
        cell.no === value ? { ...cell, selected: !cell.selected } : cell
      )
    );
  }

  return (
    <div
      className={`game-cell  ${
        selectionCount === maxSelection && !selected
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
